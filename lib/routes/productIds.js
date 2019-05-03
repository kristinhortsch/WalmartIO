const { Router } = require('express');
const { getProductIds } = require('../services/getProductIds');

module.exports = Router()
  .get('/', (req, res) => {
    const results = getProductIds();
    return res.send(results);
  });

