// Vercel serverless function wrapper
// This re-exports the built handler from dist/index.js
const handler = require('../dist/index.js');
module.exports = handler.default || handler;
