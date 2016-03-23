var most_profitable_overall = require('../most_profitable_overall');
var assert = require('assert');

describe("most_profitable_overall", function(){
  it("should return object 'melons: 22'", function(){
   var result = most_profitable_overall([{"oranges from Shopright":10}, {"melons from Chockers":20, "oranges from Woodies":2}, {"kiwifruit from Sparks":11 },{"melons from Eppig":2}]);
   assert.deepEqual(result, {'melons from Chockers': 20});
  });
});
