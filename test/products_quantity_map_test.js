var products_quantity_map = require('../products_quantity_map');
var assert = require('assert');

describe("products_quantity_map", function(){
  it("should return object array {oranges:6, pears:3,apples;7}", function(){
   var result = products_quantity_map(['oranges,1,R12\r','pears,3,R13\r',
'apples,7,R14\r','oranges,5,R12\r']);
   assert.deepEqual(result, {"oranges":6, "pears":3,"apples":7});
  });
});
