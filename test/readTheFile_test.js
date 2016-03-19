var readTheFile = require('../readTheFile');
var assert = require('assert');

describe("readTheFile", function(){
  it("should return string equal to contents of the file", function(){
   var result = readTheFile('C:/Users/BENPC/NelisaNarrative/tester.csv');
   assert.deepEqual(result, ['Student,Year,Grade\r','Jane,2019,A\r',
'Nicole,2017,C\r','Chakaza,2016,B\r']);
  });
});
