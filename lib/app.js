const express = require('express');
const app = express();
const items = require('./routes/items');
const { handler } = require('./middleware/error');
const notFound = require('./middleware/notFound');

app.use(express.json());
app.use('/items', items);
app.use(notFound);
app.use(handler);

module.exports = app;