var most_profitable_category = require('../most_profitable_category');
var assert = require('assert');

describe("most_profitable_category", function(){
  it("should return 'pears from Checkers': 20", function(){
   var result = most_profitable_category({fruit:['oranges','apples'], toiletries:['soap','Shampoo'], diary:['cheese', 'milk']},{"oranges":"R12", "pears":"R30", "apples":"R14", "soap":"R11", "milk":"R12","Shampoo":"R10"}, {"Shopright":{"oranges":"R17", "Shampoo":"R13", "apples":"R14"}, "Checkers":{"cheese":"R14", "soap":"R12", "pears":"R10"}});
   assert.deepEqual(result, {'pears from Checkers': 20});
  });
});
