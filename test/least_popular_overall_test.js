var least_popular_overall = require('../least_popular_overall');
var assert = require('assert');

describe("least_popular_overall", function(){
  it("should return object 'oranges: 10' ", function(){
   var result = least_popular_overall([{"oranges":8}, {"melons":2, "oranges":1}, {"kiwifruit":11, "oranges":1},{"melons":20}]);
   assert.deepEqual(result, {"oranges": 10});
  });
});
