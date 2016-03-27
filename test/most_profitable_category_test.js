var most_profitable_category = require('../most_profitable_category');
var assert = require('assert');

describe("most_profitable_category", function(){
  it("should return 'fruit'", function(){
   var result = most_profitable_category({fruit:['oranges','apples','pears'], toiletries:['soap','Shampoo'], diary:['cheese', 'milk']},{"Shopright":{"oranges":5, "pears":4, "soap":1, "cheese":3}, "Checkers":{"apples":6, "oranges":7, "pears":1, "milk":2}});
   assert.deepEqual(result, {fruit:14.5});
  });
});
