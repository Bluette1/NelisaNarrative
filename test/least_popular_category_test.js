var least_popular_category = require('../least_popular_category');
var assert = require('assert');

describe("least_popular_category", function(){
  it("should return 'diary'", function(){
   var result = least_popular_category({fruit:['oranges','apples','pears'], toiletries:['soap','Shampoo'], diary:['cheese', 'milk']},{"oranges":12, "pears":23,"apples":17, "soap":7, "Shampoo":30, "cheese":2});
   assert.deepEqual(result, {diary:2});
  });
});
