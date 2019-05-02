const { Router } = require('express');
const { getItem } = require('../services/getItem');
const { getOldItem } = require('../services/getOldItem');
const { getQuote } = require('../services/getQuote');

module.exports = Router()
  .get('/', (req, res, next) => {
    return getQuote()
      .then(results => res.send(results))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    return getItem(`${id}`)
      .then(results => res.send(results))
      .catch(next);
  })
  .get('/products/:id', (req, res, next) => {
    const id = req.params.id;
    return getOldItem(`${id}`)
      .then(results => res.send(results))
      .catch(next);
  });
