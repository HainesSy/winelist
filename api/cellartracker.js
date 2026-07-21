export const config = {
  runtime: 'edge',
};

export default async function (req) {
  const url = new URL(req.url);
  // Extract the part of the path after /api/cellartracker and include the search params
  const targetPath = url.pathname.replace('/api/cellartracker', '') + url.search;
  const targetUrl = `https://www.cellartracker.com${targetPath}`;

  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    const fetchOptions = {
      method: req.method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept': 'text/csv,text/plain,application/csv,application/json,*/*',
      },
    };

    if (req.method === 'POST') {
      const contentType = req.headers.get('content-type');
      if (contentType) {
        fetchOptions.headers['Content-Type'] = contentType;
      }
      fetchOptions.body = await req.text();
    }

    const response = await fetch(targetUrl, fetchOptions);

    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/csv',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });

    return newResponse;
  } catch (error) {
    return new Response(`Proxy Error: ${error.message}`, { status: 500 });
  }
}
