var most_popular_category = require('../most_popular_category');
var assert = require('assert');

describe("most_popular_category", function(){
  it("should return 'fruit'", function(){
   var result = most_popular_category({fruit:['oranges','apples','pears'], toiletries:['soap','Shampoo'], diary:['cheese', 'milk']},{"oranges":12, "pears":23,"apples":17, "soap":7, "Shampoo":3, "cheese":2});
   assert.deepEqual(result, {fruit:52});
  });
});
