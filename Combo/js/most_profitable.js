module.exports = function(productsProfitMap) {
  var maxProfit = 0;
  var mostProfitable = "";
  for (var shop in productsProfitMap) {
    for (var product in productsProfitMap[shop]) {
      if (maxProfit === productsProfitMap[shop][product]) {
        mostProfitable += " and " + product + " from " + shop;
      }

      if (maxProfit < productsProfitMap[shop][product]) {
        maxProfit = productsProfitMap[shop][product];
        mostProfitable = product + " from " + shop;
      }


    }


  }
  var obj = {};
  var theMostProfitable = mostProfitable.split(" and ");
  for (i = 0; i < theMostProfitable.length; i++) {
    obj[theMostProfitable[i]] = maxProfit;
  }
  //console.log(obj);
  return obj;
}
