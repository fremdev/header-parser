const express = require('express');
const requestIp = require('request-ip');

const {getLanguage, getOsInfo} = require('./utils/utils');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  const ipaddress = requestIp.getClientIp(req);
  const language = getLanguage(req.headers['accept-language']);
  const software = getOsInfo(req.headers['user-agent']);
  res.send({ipaddress, language, software});
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
