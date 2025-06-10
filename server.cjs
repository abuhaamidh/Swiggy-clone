
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors());

const products = require('./src/json/product.json');
const cuisines = require('./src/json/cuisine.json');

app.get('/api/product', (req, res) => {
   res.json(products)
});

app.get('/api/cuisine', (req, res) => {
    res.json(cuisines)
});

app.listen(PORT, () => {
    console.log(`Woah! Your server is running is http://localhost${PORT}`);
}) 