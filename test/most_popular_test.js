var most_popular = require('../most_popular');
var assert = require('assert');

describe("most_popular", function(){
  it("should return 'melons': 20", function(){
   var result = most_popular({"oranges":8, "apples":2, "kiwifruit":11, "melons":20});
   assert.deepEqual(result, {'melons': 20});
  });
});
