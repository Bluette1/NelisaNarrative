
var readTheFile = require('./readTheFile');
var week1 = readTheFile('/home/coder/NelisaNarrative/week1.csv');
var products_price_map = require('./products_price_map');
var products_cost_map = require('./products_cost_map');
var productsPriceMap = products_price_map(week1);
var purchases = readTheFile('/home/coder/NelisaNarrative/purchases.csv');
var productsCostMap = products_cost_map(purchases);
var most_profitable = require('./most_profitable');
var mostProfitable = most_profitable(productsPriceMap,productsCostMap);


console.log(mostProfitable);
