module.exports = function(arrayOfObjects) {
  var find_lowest_quantity = require('./find_lowest_quantity');
  var leastMap = find_lowest_quantity(arrayOfObjects);
  //console.log(leastMap);
  return leastMap;
}
