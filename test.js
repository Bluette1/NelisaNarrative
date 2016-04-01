
var writeReport = function(name,html){
var fs = require('fs');
  fs.writeFile(name, html, function(err){
    if (err) {
      throw err;
    }
    console.log('It\'s saved!');
  });
}

//Write sales report for week 1
var getHTML = function(n){
  var Records = require('./records');
  var records = new Records();
  var HTML = require('./HTML');
  var HTMLObj = new HTML();
switch (n) {
  case 1: return HTMLObj.createHTML('week1',records.getMostPopular(1),records.getLeastPopular(1),records.getMostPopularCategory(1),records.getLeastPopularCategory(1),records.getMostProfitable(1),records.getMostProfitableCategory(1,1),records.getMostProfitableCategory(2,1));
  break;

  case 2: return HTMLObj.createHTML('week2',records.getMostPopular(2),records.getLeastPopular(2),records.getMostPopularCategory(2),records.getLeastPopularCategory(2),records.getMostProfitable(2),records.getMostProfitableCategory(1,2),records.getMostProfitableCategory(2,2));
  break;

  case 3: return HTMLObj.createHTML('week3',records.getMostPopular(3),records.getLeastPopular(3),records.getMostPopularCategory(3),records.getLeastPopularCategory(3),records.getMostProfitable(3),records.getMostProfitableCategory(1,3),records.getMostProfitableCategory(2,3));
  break;

  case 4: return HTMLObj.createHTML('week4',records.getMostPopular(4),records.getLeastPopular(4),records.getMostPopularCategory(4),records.getLeastPopularCategory(4),records.getMostProfitable(4),records.getMostProfitableCategory(1,4),records.getMostProfitableCategory(2,4));
  break;

  case 5: return HTMLObj.createHTML('Overall: Report for the month',records.getMostPopular(5),records.getLeastPopular(5),records.getMostPopularCategory(5),records.getLeastPopularCategory(5),records.getMostProfitable(5),records.getMostProfitableCategory(1,5),records.getMostProfitableCategory(2,5));
  break;

  default:
  break;
}
}

function write_the_files(){
  var n = 5;
  while (n > 0) {
    if(n === 5){
        writeReport("month.html", getHTML(n));
    }
    else {
      writeReport("week"+n+".html", getHTML(n));
    }

    n--;
  };

}

 write_the_files();
