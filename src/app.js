const express = require('express');
const newsRoutes = require('./routes/newsRoutes');
const { port } = require('./config');

const app = express();

app.use('/api', newsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
