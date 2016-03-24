var most_popular_category_overall = require('../most_popular_category_overall');
var assert = require('assert');

describe("most_popular_category_overall", function(){
  it("should return 'fruit'", function(){
   var result = most_popular_category_overall([{"fruit":28}, {"toiletries":11, "fruit":11}, {"toiletries":11 },{"diary":20}]);
   assert.deepEqual(result, {fruit:39});
  });
});
