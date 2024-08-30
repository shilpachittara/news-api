require('dotenv').config();

module.exports = {
  apiKey: process.env.API_KEY,
  port: process.env.PORT || 3000,
  cacheTTL: process.env.CACHE_TTL || 3600,
};