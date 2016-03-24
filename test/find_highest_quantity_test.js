var find_highest_quantity = require('../find_highest_quantity');
var assert = require('assert');

describe("find_highest_quantity", function(){
  it("should return object 'melons: 22'", function(){
   var result = find_highest_quantity([{"oranges":8}, {"melons":2, "oranges":1}, {"kiwifruit":11 },{"melons":20}]);
   assert.deepEqual(result, {'melons': 22});
  });
});
