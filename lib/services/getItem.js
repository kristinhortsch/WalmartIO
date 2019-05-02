const request = require('superagent');
const sha256 = require('js-sha256');
const btoa = require('btoa');

const getItem = id => {
  const timestamp = Date.now();
  const consumerId = 'd0a561a8-17fa-4b89-90f7-d79fd709fdbe';
  const stringSignature = `${consumerId}\n${timestamp}\n1\n`;
  const signatureSHA256 = sha256(stringSignature);
  const authSignature = btoa(signatureSHA256);

  return request
    .get(`https://developer.api.walmart.com/api-proxy/service/affil/product/v2/items/${id}`)
    .set('Content-Type', 'application/json')
    .set('WM_CONSUMER.INTIMESTAMP', `${timestamp}`)
    .set('WM_SEC.KEY_VERSION', '1')
    .set('WM_CONSUMER.ID', `${consumerId}`)
    .set('WM_SEC.AUTH_SIGNATURE', `${authSignature}`)
    .set('SignedHeaders', 'WM_CONSUMER.ID;WM_CONSUMER.INTIMESTAMP;WM_SEC.KEY_VERSION;')
    .then(res => {
      return res.body;
    });  
};

module.exports = { getItem };

// const timestamp = Date.now();
// const consumerId = 'd0a561a8-17fa-4b89-90f7-d79fd709fdbe';
// const stringSignature = `${consumerId}\n${timestamp}\n1\n`;
// const signatureSHA256 = sha256(stringSignature);
// const authSignature = btoa(signatureSHA256);
// console.log(authSignature);
// console.log(signatureSHA256);
