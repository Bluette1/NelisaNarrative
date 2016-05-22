module.exports = function(arrayOfObjects) {
  var find_highest_quantity = require('./find_highest_quantity');
  var mostProfitableOverall = find_highest_quantity(arrayOfObjects);
  return mostProfitableOverall;
}
