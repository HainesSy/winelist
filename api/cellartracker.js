export const config = {
  runtime: 'edge',
};

export default async function (req) {
  const url = new URL(req.url);
  // Extract the part of the path after /api/cellartracker and include the search params
  const targetPath = url.pathname.replace('/api/cellartracker', '') + url.search;
  const targetUrl = `https://www.cellartracker.com${targetPath}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        // Force a Desktop User-Agent to prevent CellarTracker from redirecting to mobile pages
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept': 'text/csv,text/plain,application/csv,*/*',
      },
    });

    // Create a new response with the same body and status, but adding CORS headers
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/csv',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

    return newResponse;
  } catch (error) {
    return new Response(`Proxy Error: ${error.message}`, { status: 500 });
  }
}
