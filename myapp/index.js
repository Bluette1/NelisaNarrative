
var express = require('express');
var app = express();

app.get('/sales/:week_name', function (req, res) {
  var Records = require('../records');
  var records = new Records();
  var HTML = require('../HTML');
  var HTMLObj = new HTML();

  if(req.params.week_name==='week1'){

    res.send(HTMLObj.createHTML('week1',records.getMostPopular(1),records.getLeastPopular(1),records.getMostPopularCategory(1),records.getLeastPopularCategory(1),records.getMostProfitable(1),records.getMostProfitableCategory(1,1),records.getMostProfitableCategory(2,1)));
  }
  if(req.params.week_name==='week2'){
    res.send(HTMLObj.createHTML('week2',records.getMostPopular(2),records.getLeastPopular(2),records.getMostPopularCategory(2),records.getLeastPopularCategory(2),records.getMostProfitable(2),records.getMostProfitableCategory(1,2),records.getMostProfitableCategory(2,2)));
  }

  if (req.params.week_name==='week3') {
    res.send(HTMLObj.createHTML('week3',records.getMostPopular(3),records.getLeastPopular(3),records.getMostPopularCategory(3),records.getLeastPopularCategory(3),records.getMostProfitable(3),records.getMostProfitableCategory(1,3),records.getMostProfitableCategory(2,3)));
  }

    if(req.params.week_name==='week4'){
      res.send(HTMLObj.createHTML('week4',records.getMostPopular(4),records.getLeastPopular(4),records.getMostPopularCategory(4),records.getLeastPopularCategory(4),records.getMostProfitable(4),records.getMostProfitableCategory(1,4),records.getMostProfitableCategory(2,4)));
    }

    if(req.params.week_name==='month'){
      res.send(HTMLObj.createHTML('Overall: Report for the month',records.getMostPopular(5),records.getLeastPopular(5),records.getMostPopularCategory(5),records.getLeastPopularCategory(5),records.getMostProfitable(5),records.getMostProfitableCategory(1,5),records.getMostProfitableCategory(2,5)));
    }

});

app.listen(3001, function () {
  console.log('My app is listening on port 3001!');
});
