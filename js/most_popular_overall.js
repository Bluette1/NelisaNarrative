module.exports = function(arrayOfObjects) {
  var find_highest_quantity = require('./find_highest_quantity');
  var mostPopularOverall = find_highest_quantity(arrayOfObjects);
  return mostPopularOverall;
}

//most_popular_overall([{"oranges":1}, {"melons":11, "oranges":30}, {"kiwifruit":31 },{"melons":20}]);
