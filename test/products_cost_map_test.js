var products_cost_map = require('../products_cost_map');
var assert = require('assert');

describe("products_cost_map", function(){
  it("should return object array {oranges:R6, pears:R3,apples;R7}", function(){
   var result = products_cost_map(['oranges;1;R12;R12\r','pears;3;R13;R39\r',
'apples;7;R14;R84\r','oranges;5;R12;R60\r','pears;4;R13;R52\r']);
   assert.deepEqual(result, {"oranges":"R12", "pears":"R13","apples":"R14"});
  });
});
