var express = require('express');
var app = express();

app.use(express.static('../public'));
var exphbs = require('express-handlebars');
app.set('views', './views');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var getContext = function(string, object1, object2, object3, object4, object5, object6, object7) {
  var objectToString = require('../objectToString');

  var context = {
    Week: string,
    data: [{
      "section": "most popular product",
      "result": objectToString(object1)
    }, {
      "section": "least popular product",
      "result": objectToString(object2)
    }, {
      "section": "most popular category",
      "result": objectToString(object3)
    }, {
      "section": "least popular category",
      "result": objectToString(object4)
    }, {
      "section": "most profitable product",
      "result": objectToString(object5)
    }, {
      "section": "most profitable category",
      "result": objectToString(object6)
    }, {
      "section": "most profitable category (if Nelisa buys from the cheapest supplier)",
      "result": objectToString(object7)
    }]

  }

  return context;
}
app.get('/sales/:week_name', function(req, res) {
  var Records = require('../records');
  var records = new Records();



  if (req.params.week_name === 'week1') {
    res.render('report', getContext('Week 1', records.getMostPopular(1), records.getLeastPopular(1), records.getMostPopularCategory(1), records.getLeastPopularCategory(1), records.getMostProfitable(1), records.getMostProfitableCategory(1, 1), records.getMostProfitableCategory(2, 1)));

  } else if (req.params.week_name === 'week2') {
    res.render('report', getContext('Week 2', records.getMostPopular(2), records.getLeastPopular(2), records.getMostPopularCategory(2), records.getLeastPopularCategory(2), records.getMostProfitable(2), records.getMostProfitableCategory(1, 2), records.getMostProfitableCategory(2, 2)));
  } else if (req.params.week_name === 'week3') {
    res.render('report', getContext('Week 3', records.getMostPopular(3), records.getLeastPopular(3), records.getMostPopularCategory(3), records.getLeastPopularCategory(3), records.getMostProfitable(3), records.getMostProfitableCategory(1, 3), records.getMostProfitableCategory(2, 3)));
  } else if (req.params.week_name === 'week4') {
    res.render('report', getContext('Week 4', records.getMostPopular(4), records.getLeastPopular(4), records.getMostPopularCategory(4), records.getLeastPopularCategory(4), records.getMostProfitable(4), records.getMostProfitableCategory(1, 4), records.getMostProfitableCategory(2, 4)));
  } else if (req.params.week_name === 'month') {
    res.render('report', getContext('Overall: Report for the month', records.getMostPopular(5), records.getLeastPopular(5), records.getMostPopularCategory(5), records.getLeastPopularCategory(5), records.getMostProfitable(5), records.getMostProfitableCategory(1, 5), records.getMostProfitableCategory(2, 5)));
  }


});

app.get('/', function(req, res) {
  res.render("home");
});
app.get('/about', function(req, res) {
  res.render("nelisa");
});
app.listen(3001, function() {
  console.log('My app is listening on port 3001!');
});
