export default function (req, res) {
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.json({
    message: 'Welcome to 🚀mercury-parser-api API! Endpoint: /parser',
  })
}
