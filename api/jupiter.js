export default async function handler(req, res) {
  const path = req.url.replace('/api/jupiter', '');
  const jupiterUrl = `https://quote-api.jup.ag${path}`;

  const response = await fetch(jupiterUrl, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.JUPITER_API_KEY}`
    },
    body: req.method === "POST" ? JSON.stringify(req.body) : undefined
  });

  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}
