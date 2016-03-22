module.exports = function(productsPriceMap, productsCostMap){
  var maxProfit =0;
  var mostProfitable ="";
for(key in productsPriceMap){
  var priceArray =productsPriceMap[key].split('R');
  var price =priceArray[1];
  var costArray =productsCostMap[key].split('R');
  var cost = costArray[1];
  var profit = Number(price)-Number(cost);
  if(profit==maxProfit){
    mostProfitable += " and " + key;
  }

  if(profit > maxProfit){
    maxProfit = profit;
    mostProfitable = key;
  }

}
return mostProfitable;
}
