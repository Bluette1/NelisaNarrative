var most_profitable_category = require('../most_profitable_category');
var assert = require('assert');

describe("most_profitable_category", function(){
  it("should return 'fruit'", function(){
   var result = most_profitable_category({fruit:['oranges','apples'], toiletries:['soap','Shampoo'], diary:['cheese', 'milk']},{"oranges":"R20", "pears":"R30", "apples":"R24", "soap":"R11", "milk":"R12","Shampoo":"R10", "cheese":"R6"}, {"Shopright":{"oranges":"R6", "Shampoo":"R13", "apples":"R7", "milk":"R20"}, "Checkers":{"cheese":"R14", "soap":"R12", "pears":"R5"}});
   assert.deepEqual(result, {fruit:31});
  });
});
