module.exports = function(arrayOfObjects) {
  var find_highest_quantity = require('./find_highest_quantity');
  var mostPopularCategoryOverall = find_highest_quantity(arrayOfObjects);
  return mostPopularCategoryOverall;
}
