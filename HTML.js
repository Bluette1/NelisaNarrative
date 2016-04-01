module.exports = function() {

  var Handlebars = require('handlebars');

  var source = "<h1>Nelisa's Weekly Sales Report<br><h2>{{Week}}<h3><br>Most popular product:{{MostPopular}}<br>Least popular product: {{LeastPopular}} <br>Most popular category: {{MostPopularCategory}} <br> Least popular category: {{LeastPopularCategory}} <br>Most profitable product: {{MostProfitableProduct}} <br>Most profitable category: {{MostProfitableCategory}}<br> Most profitable category(If Nelisa buys from cheapest supplier): {{MostProfitableCateg}}";
  var template = Handlebars.compile(source);
  var objectToString = require('./objectToString');

  this.createHTML = function(string, object1, object2, object3, object4, object5, object6, object7, object8) {
    var context = {
      Week: string,
      MostPopular: objectToString(object1),
      LeastPopular: objectToString(object2),
      MostPopularCategory: objectToString(object3),
      LeastPopularCategory: objectToString(object4),
      MostProfitableProduct: objectToString(object5),
      MostProfitableCategory: objectToString(object6),
      MostProfitableCateg: objectToString(object7)
    }
    var html = template(context);
    return html;
  }

}
