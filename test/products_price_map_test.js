var products_price_map = require('../products_price_map');
var assert = require('assert');

describe("products_price_map", function(){
  it("should return object array {oranges:R12, pears:R13,apples;R14}", function(){
   var result = products_price_map(['oranges,1,R12\r','pears,3,R13\r',
'apples,7,R14\r','pears,2,R13\r','oranges,5,R12\r','pears,8,R13\r','apples,10,R14\r']);
   assert.deepEqual(result, {"oranges":"R12", "pears":"R13","apples":"R14"});
  });
});
