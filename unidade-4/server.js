const express = require('express');

const app = express();
app.use(express.json());

// Rota GET para "/"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Rota POST para "/data"
app.post('/data', (req, res) => {
  res.json({ ...req.body, message: 'Success' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
