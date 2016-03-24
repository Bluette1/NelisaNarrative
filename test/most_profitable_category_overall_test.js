var most_profitable_category_overall = require('../most_profitable_category_overall');
var assert = require('assert');

describe("most_profitable_category_overall", function(){
  it("should return object 'melons: 24'", function(){
   var result = most_profitable_category_overall([{"oranges":8, "melons":2}, {"melons":2, "oranges":1}, {"kiwifruit":11 },{"melons":20}]);
   assert.deepEqual(result, {'melons': 24});
  });
});
