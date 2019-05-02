const request = require('superagent');

const getOldItem = id => {
  return request
    .get(`http://api.walmartlabs.com/v1/items/${id}?format=json&apiKey=kjybrqfdgp3u4yv2qzcnjndj`)
    .then(res => {
      return res.body;
    });
};

module.exports = { getOldItem };

