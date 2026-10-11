/**
 * Cloudflare Pages Functions: /api/sync
 * 
 * Handles cross-device data synchronization (PC - Mobile) using Cloudflare KV.
 * KV Namespace Binding: LIFEGAME_KV
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-sync-passcode',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8'
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: CORS_HEADERS
  });
}

function getStorageKey(request) {
  try {
    const url = new URL(request.url);
    const passcode = request.headers.get('x-sync-passcode') || url.searchParams.get('passcode') || url.searchParams.get('key');
    if (passcode && passcode.trim()) {
      return `lifegame_user_${encodeURIComponent(passcode.trim())}`;
    }
  } catch (e) {
    // Fallback if URL parsing fails
  }
  return 'lifegame_main_data';
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });
}

export async function onRequestGet(context) {
  const { request, env } = context;

  // Check if KV binding is available
  if (!env || !env.LIFEGAME_KV) {
    return jsonResponse({
      success: false,
      error: 'LIFEGAME_KV binding not configured yet in Cloudflare Pages dashboard.',
      notConfigured: true,
      data: null
    }, 200);
  }

  try {
    const key = getStorageKey(request);
    const rawData = await env.LIFEGAME_KV.get(key);

    if (!rawData) {
      return jsonResponse({
        success: true,
        data: null,
        message: 'No cloud data found yet. Using local state.',
        key
      });
    }

    const parsedData = JSON.parse(rawData);
    return jsonResponse({
      success: true,
      data: parsedData,
      key,
      timestamp: parsedData.updatedAt || Date.now()
    });
  } catch (err) {
    return jsonResponse({
      success: false,
      error: 'Failed to read data from KV: ' + err.message
    }, 500);
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // Check if KV binding is available
  if (!env || !env.LIFEGAME_KV) {
    return jsonResponse({
      success: false,
      error: 'LIFEGAME_KV binding not configured yet in Cloudflare Pages dashboard.',
      notConfigured: true
    }, 200);
  }

  try {
    const key = getStorageKey(request);
    let payload;

    try {
      payload = await request.json();
    } catch (e) {
      return jsonResponse({
        success: false,
        error: 'Invalid JSON body format.'
      }, 400);
    }

    if (!payload || typeof payload !== 'object') {
      return jsonResponse({
        success: false,
        error: 'Payload must be a valid JSON object.'
      }, 400);
    }

    // Attach sync metadata
    const now = Date.now();
    payload.updatedAt = now;

    // Save full application state to Cloudflare KV
    await env.LIFEGAME_KV.put(key, JSON.stringify(payload));

    return jsonResponse({
      success: true,
      key,
      timestamp: now,
      message: 'Cloud data synchronized successfully.'
    });
  } catch (err) {
    return jsonResponse({
      success: false,
      error: 'Failed to write data to KV: ' + err.message
    }, 500);
  }
}
