const request = require('superagent');

const getQuote = () => {
  return request
    .get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      return res.body;
    });
};

module.exports = { getQuote };
