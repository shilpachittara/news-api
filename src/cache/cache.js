const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: parseInt(process.env.CACHE_TTL) });

module.exports = cache;