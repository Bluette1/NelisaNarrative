
var Records = require('../records');
var records = new Records();


var Handlebars = require('handlebars');

var source ="<h1>Nelisa's Weekly Sales Report<br><h2>{{Week}}<h3><br>Most popular product:{{MostPopular}}<br>Least popular product: {{LeastPopular}} <br>Most popular category: {{MostPopularCategory}} <br> Least popular category: {{LeastPopularCategory}} <br>Most profitable product: {{MostProfitableProduct}} <br>Most profitable category: {{MostProfitableCategory}}<br> Most profitable category(If Nelisa buys from cheapest supplier): {{MostProfitableCateg}}";
var template = Handlebars.compile(source);
var objectToString = require('../objectToString');

var createHTML = function(string, object1,object2,object3,object4,object5,object6,object7,object8){
var context ={Week: string, MostPopular: objectToString(object1), LeastPopular: objectToString(object2), MostPopularCategory:objectToString(object3), LeastPopularCategory:objectToString(object4), MostProfitableProduct: objectToString(object5), MostProfitableCategory:objectToString(object6), MostProfitableCateg:objectToString(object7) }
var html = template(context);
return html;
}


var express = require('express');
var app = express();

app.get('/sales/:week_name', function (req, res) {

  if(req.params.week_name==='week1'){

    res.send(createHTML('week1',records.getMostPopular(1),records.getLeastPopular(1),records.getMostPopularCategory(1),records.getLeastPopularCategory(1),records.getMostProfitable(1),records.getMostProfitableCategory(1,1),records.getMostProfitableCategory(2,1)));
  }
  if(req.params.week_name==='week2'){
    res.send(createHTML('week2',records.getMostPopular(2),records.getLeastPopular(2),records.getMostPopularCategory(2),records.getLeastPopularCategory(2),records.getMostProfitable(2),records.getMostProfitableCategory(1,2),records.getMostProfitableCategory(2,2)));
  }

  if (req.params.week_name==='week3') {
    res.send(createHTML('week3',records.getMostPopular(3),records.getLeastPopular(3),records.getMostPopularCategory(3),records.getLeastPopularCategory(3),records.getMostProfitable(3),records.getMostProfitableCategory(1,3),records.getMostProfitableCategory(2,3)));
  }

    if(req.params.week_name==='week4'){
      res.send(createHTML('week4',records.getMostPopular(4),records.getLeastPopular(4),records.getMostPopularCategory(4),records.getLeastPopularCategory(4),records.getMostProfitable(4),records.getMostProfitableCategory(1,4),records.getMostProfitableCategory(2,4)));
    }

    if(req.params.week_name==='month'){
      res.send(createHTML('Overall: Report for the month',records.getMostPopular(5),records.getLeastPopular(5),records.getMostPopularCategory(5),records.getLeastPopularCategory(5),records.getMostProfitable(5),records.getMostProfitableCategory(1,5),records.getMostProfitableCategory(2,5)));
    }

});

app.listen(3001, function () {
  console.log('My app listening on port 3001!');
});
