var products_profit_map = require('../products_profit_map');
var assert = require('assert');

describe("products_profit_map", function(){
  it("should return map", function(){
   var result = products_profit_map({"oranges":"R19", "pears":"R17","apples":"R15"}, {"Shopright":{"oranges":"R17", "pears":"R13"}, "Checkers":{"apples":"R14", "oranges":"R12", "pears":"R16"}});
   assert.deepEqual(result, {"Shopright":{"oranges":2, "pears":4}, "Checkers":{"apples":1, "oranges":7, "pears":1}});
  });
});
