export default {
  async fetch(request) {
    const upstream = "https://raw.githubusercontent.com/runebakjacobsen/t1-data/main/latest.json";

    const response = await fetch(upstream, {
      headers: { "Cache-Control": "no-cache" },
    });

    const newHeaders = new Headers(response.headers);
    newHeaders.set("Cache-Control", "no-store, no-cache, must-revalidate");
    newHeaders.set("Pragma", "no-cache");
    newHeaders.set("Access-Control-Allow-Origin", "*");

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });
  },
};
