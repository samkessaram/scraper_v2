var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = process.argv[2];

var content = function(url){
  request(url, function(error, response, body){
    var $ = cheerio.load(body);
    var rows = $('tr');

    var stream = fs.createWriteStream("images.csv");
    stream.on("open", function(fd){
      for(var i = 1; i < rows.length; i++){
        var href = (rows[i].children[2].children[0].attribs.href);
        var fileType = (rows[i].children[2].children[0].children[0].data.split(".")[1])
        var permissions = (rows[i].children[0].children[0].children[0].data); 
        var data = permissions + " " + fileType + " " + href + "\n";
        stream.write(data);
      }
      stream.end();
    });


    
    // console.log(permissions + " " + fileType + " " + href);

  })
};

content(url);


