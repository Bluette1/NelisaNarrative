var products_cost_map = require('../products_cost_map');
var assert = require('assert');

describe("products_cost_map", function(){
  it("should return object array {oranges:R6, pears:R3,apples;R7}", function(){
   var result = products_cost_map(['Shop;Date;Item;Quantity;Cost;Total Cost','Shopright;23-Jan;oranges;1;R17;R17\r','Shopright;23-Jan;pears;3;R13;R39\r',
'Checkers;24-Jan;apples;7;R14;R98\r','Checkers;24-Jan;oranges;5;R12;R60\r','Checkers;24-Jan;pears;4;R16;R64\r','Shopright;23-Jan;oranges;2;R17;R34\r','Shopright;23-Jan;apples;3;R14;R42\r']);
   assert.deepEqual(result, {"Shopright":{"oranges":"R17", "pears":"R13", "apples":"R14"}, "Checkers":{"apples":"R14", "oranges":"R12", "pears":"R16"}});
  });
});
