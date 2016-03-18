var least_popular = require('../least_popular');
var assert = require('assert');

describe("least_popular", function(){
  it("should return 'apples': 2", function(){
   var result = most_popular({"oranges":8, "apples":2, "kiwifruit":11, "melons":20});
   assert.deepEqual(result, {'apples': 2});
  });
});
