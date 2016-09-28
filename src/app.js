const express = require('express');
const cheerio = require('cheerio');
const app = express();
const grabInstagramImages = require('./phantom');
const utils = require('./utils');

app.get('/scrape/:hashtag', (req, res) => {
  grabInstagramImages(req.params.hashtag)
    .then((content) => {
      const $ = cheerio.load(content);
      const imagesContainerObj = $('article img');
      const response = Object.keys(imagesContainerObj)
                         .filter(k => utils.hasAttributes(imagesContainerObj[k]))
                         .map(k => utils.toImageJSON(imagesContainerObj[k]));
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
