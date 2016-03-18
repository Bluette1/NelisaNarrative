var most_popular_overall = require('../most_popular_overall');
var assert = require('assert');

describe("most_popular_overall", function(){
  it("should return object 'melons: 22'", function(){
   var result = most_popular_overall([{"oranges":8}, {"melons":2, "oranges":1}, {"kiwifruit":11 },{"melons":20}]);
   assert.deepEqual(result, {'melons': 22});
  });
});
