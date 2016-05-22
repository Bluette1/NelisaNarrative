module.exports = function() {

  var Handlebars = require('handlebars');

  var fs = require("fs");
  var source = fs.readFileSync("./test.handlebars", 'utf8');
  var template = Handlebars.compile(source);
  var objectToString = require('./objectToString');

  this.createHTML = function(string, object1, object2, object3, object4, object5, object6, object7) {
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
    var html = template(context);
    return html;
  }

}
