var least_popular_category_overall = require('../least_popular_category_overall');
var assert = require('assert');

describe("least_popular_category_overall", function(){
  it("should return 'diary'", function(){
   var result = least_popular_category_overall([{"fruit":28}, {"toiletries":11, "fruit":11}, {"toiletries":11 },{"diary":20}]);
   assert.deepEqual(result, {diary:20});
  });
});
