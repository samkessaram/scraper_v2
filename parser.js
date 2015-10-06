var cheerio = require('cheerio');
var scraper = require('./scraper');
var fs = require('fs');

var parse = function(data){
  console.log(data);
};

var content = scraper('http://substack.net/images/do_not_write_big_apps/', parse);




