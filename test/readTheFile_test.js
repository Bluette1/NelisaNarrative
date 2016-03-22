var readTheFile = require('../readTheFile');
var assert = require('assert');

describe("readTheFile", function(){
  it("should return string equal to contents of the file", function(){
   var result = readTheFile('/home/coder/NelisaNarrative/tester.csv');
   assert.deepEqual(result, ['Student,Year,Grade','Jane,2019,A',
'Nicole,2017,C','Chakaza,2016,B']);
  });
});
