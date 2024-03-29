const Mercury = require('@postlight/parser');

export default async function (req, res) {
  let result = { message: 'No URL was provided' };
  if (req.query.url) {
    try {
      const contentType = req.query.contentType || 'html';
      let headers = new Object();
      if (typeof req.query.headers !== 'undefined') {
        headers = JSON.parse(req.query.headers);
      }
      result = await Mercury.parse(req.query.url, {
        contentType,
        headers,
      });

      res.setHeader('Cache-Control', 'public, max-age=86400');
    } catch (error) {
      result = { error: true, messages: error.message };
    }
  }
  return res.json(result);
}
