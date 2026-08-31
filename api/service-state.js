export const config = {
  runtime: 'edge',
};

let sharedState = {
  history: [],
  counts: {},
  bins: {},
  username: '',
  lastUpdated: Date.now()
};

export default async function (req) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  if (req.method === 'GET') {
    return new Response(JSON.stringify(sharedState), { status: 200, headers });
  }

  if (req.method === 'POST') {
    try {
      const data = await req.json();
      sharedState = {
        history: data.history || [],
        counts: data.counts || {},
        bins: data.bins || {},
        username: (data.username && data.username.trim()) || sharedState.username || '',
        lastUpdated: Date.now()
      };
      return new Response(JSON.stringify({ success: true, ...sharedState }), { status: 200, headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 400, headers });
    }
  }

  if (req.method === 'DELETE') {
    sharedState = { history: [], counts: {}, bins: {}, username: sharedState.username, lastUpdated: Date.now() };
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }

  return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
}
