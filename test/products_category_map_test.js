
var products_category_map = require('../products_category_map');
var assert = require('assert');

describe("products_category_map", function(){
  it("should return object array {fruit:[oranges,apples], toiletries:[soap,Shampoo], diary:[cheese, milk]}", function(){
   var result = products_category_map(['oranges,fruit','soap,toiletries',
'apples,fruit','Shampoo,toiletries','cheese,diary','milk,diary']);
   assert.deepEqual(result, {fruit:['oranges','apples'], toiletries:['soap','Shampoo'], diary:['cheese', 'milk']});
  });
});
