var most_profitable = require('../most_profitable');
var assert = require('assert');

describe("most_profitable", function(){
  it("should return 'oranges'", function(){
   var result = most_profitable({"oranges":"R19", "pears":"R17","apples":"R15"}, {"Shopright":{"oranges":"R17", "pears":"R13"}, "Checkers":{"apples":"R14", "oranges":"R12", "pears":"R16"}});
   assert.deepEqual(result, {"oranges from Checkers":7});
  });
});
