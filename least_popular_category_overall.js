module.exports = function(arrayOfObjects) {
  var find_lowest_quantity = require('./find_lowest_quantity');
  var leastPopularCategoryOverall = find_lowest_quantity(arrayOfObjects);
  return leastPopularCategoryOverall;
}
