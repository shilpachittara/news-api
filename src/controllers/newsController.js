const newsService = require('../services/newsService');

const getArticles = async (req, res) => {
  try {
    const queryParams = req.query;
    const articles = await newsService.fetchArticles(queryParams);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getArticles,
};
