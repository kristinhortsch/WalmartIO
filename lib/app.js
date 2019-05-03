const express = require('express');
const app = express();
const items = require('./routes/items');
const productIds = require('./routes/productIds');
const { handler } = require('./middleware/error');
const notFound = require('./middleware/notFound');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/items', items);
app.use('/productIds', productIds);
app.use(notFound);
app.use(handler);

module.exports = app;
