var most_profitable = require('../most_profitable');
var assert = require('assert');

describe("most_profitable", function(){
  it("should return 'oranges'", function(){
   var result = most_profitable({"Shopright":{"oranges":2, "pears":4}, "Checkers":{"apples":1, "oranges":7, "pears":1}});
   assert.deepEqual(result, {"oranges from Checkers":7});
  });
});
