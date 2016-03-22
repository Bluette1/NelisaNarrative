var products_profit_map = function(productsPriceMap, productsCostMap){
  var productsProfitMap = {};
  for(key in productsPriceMap){
    var priceArray =productsPriceMap[key].split('R');
    var price =priceArray[1];
    var costArray =productsCostMap[key].split('R');
    var cost = costArray[1];
    var profit = Number(price)-Number(cost);
    productsProfitMap[key] = profit;
  }
  console.log(productsProfitMap);
  return productsProfitMap;
}

//products_profit_map({"oranges":"R19", "pears":"R17","apples":"R15"}, {"oranges":"R12", "pears":"R13","apples":"R14"});
var readTheFile = require('./readTheFile')
var week1 = readTheFile('/home/coder/NelisaNarrative/week1.csv');
var products_price_map = require('./products_price_map');
var products_cost_map = require('./products_cost_map');
var productsPriceMap =products_price_map(week1);
var purchases = readTheFile('/home/coder/NelisaNarrative/purchases.csv');
var productsCostMap = products_cost_map(purchases);
console.log(productsCostMap);
