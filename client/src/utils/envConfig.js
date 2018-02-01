const dotEnv = require('dotenv');
const fs = require('fs');
const path = require('path');

const configString = fs.readFileSync(path.join(__dirname, '../../.env'), { encoding: 'utf8' });
const config = dotEnv.parse(configString);

module.exports = Object
  .keys(config)
  .reduce((state, key) => Object.assign({}, state, { [key]: JSON.stringify(config[key]) }), {});
