const express = require('express');
const app = express();
const utils = require('./utils');
const rp = require('request-promise');
const parse = require('./parser');

app.get('/:hashtag', (req, res, next) => {
  const url = `https://www.instagram.com/explore/tags/${req.params.hashtag}`;
  rp(url)
    .then(html => res.json(utils.extractTagData(parse(html))))
    .catch(err => next(err));
});

module.exports = app;
