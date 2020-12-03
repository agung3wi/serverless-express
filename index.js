const serverless = require('serverless-http');
const express = require('express')
const app = express()
const path = require('path')

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

app.use(express.static(path.join(__dirname, 'public')));


module.exports.handler = serverless(app);
