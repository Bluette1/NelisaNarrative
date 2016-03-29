var objectToString= require('../objectToString');
var assert = require('assert');

describe("objectToString", function(){
  it("should return 'apples': 2", function(){
   var result = objectToString({"citrus":{"oranges": 8, "naartjies": 10, "tangarines": 4}, "apples":2, "kiwifruit":11, "melons":20});
   assert.equal(result, "citrus:{oranges: 8 naartjies: 10 tangarines: 4 } apples: 2 kiwifruit: 11 melons: 20 ");
  });
});
