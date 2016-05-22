module.exports = function(arrayOfObjects) {
  var find_highest_quantity = require('./find_highest_quantity');
  var mostProfitableCategory = find_highest_quantity(arrayOfObjects);
  return mostProfitableCategory;
}
