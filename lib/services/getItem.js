const request = require('superagent');
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

const getItem = id => {
  const privateKey = process.env.PRIVATE_KEY;
  const timestamp = Date.now().toString();
  const consumerId = 'd0a561a8-17fa-4b89-90f7-d79fd709fdbe';
  const stringSignature = `${consumerId}\n${timestamp}\n1\n`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.write(stringSignature);
  sign.end();
  const signature = sign.sign(privateKey, 'base64');

  return request
    .get(`https://developer.api.walmart.com/api-proxy/service/affil/product/v2/items/${id}`)
    .set('Content-Type', 'application/json')
    .set('WM_CONSUMER.INTIMESTAMP', `${timestamp}`)
    .set('WM_SEC.KEY_VERSION', '1')
    .set('WM_CONSUMER.ID', `${consumerId}`)
    .set('WM_SEC.AUTH_SIGNATURE', `${signature}`)
    .set('SignedHeaders', 'WM_CONSUMER.ID;WM_CONSUMER.INTIMESTAMP;WM_SEC.KEY_VERSION;')
    .then(res => {
      return res.body;
    });  
};

module.exports = { getItem };

const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey);
