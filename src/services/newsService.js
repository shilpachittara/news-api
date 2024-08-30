const axios = require('axios');
const cache = require('../cache/cache');
const { apiKey } = require('../config');

const fetchArticles = async (queryParams) => {
  const cacheKey = JSON.stringify(queryParams);
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const response = await axios.get('https://gnews.io/api/v4/search', {
    params: { ...queryParams, token: apiKey },
  });

  cache.set(cacheKey, response.data);
  return response.data;
};

module.exports = {
  fetchArticles,
};
