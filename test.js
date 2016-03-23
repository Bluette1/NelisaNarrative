
var readTheFile = require('./readTheFile');
var week1 = readTheFile('/home/coder/NelisaNarrative/week1.csv');
var week2 = readTheFile('/home/coder/NelisaNarrative/week2.csv');
var week3 = readTheFile('/home/coder/NelisaNarrative/week3.csv');
var week4 = readTheFile('/home/coder/NelisaNarrative/week4.csv');

var products_price_map = require('./products_price_map');
var products_cost_map = require('./products_cost_map');
var productsPriceMap1 = products_price_map(week1);
var productsPriceMap2 = products_price_map(week2);
var productsPriceMap3 = products_price_map(week3);
var productsPriceMap4 = products_price_map(week4);

var purchases = readTheFile('/home/coder/NelisaNarrative/purchases.csv');
var productsCostMap = products_cost_map(purchases);
var most_profitable = require('./most_profitable');
var mostProfitable1= most_profitable(productsPriceMap1,productsCostMap);
var mostProfitable2= most_profitable(productsPriceMap2,productsCostMap);
var mostProfitable3= most_profitable(productsPriceMap3,productsCostMap);
var mostProfitable4= most_profitable(productsPriceMap4,productsCostMap);
var most_profitable_overall = require('./most_profitable_overall');
var mostProfitable =most_profitable_overall([mostProfitable1, mostProfitable2, mostProfitable3, mostProfitable4]);
//console.log(mostProfitable);

var categories =readTheFile('/home/coder/NelisaNarrative/categories.csv');
var products_category_map = require('./products_category_map');
var productsCategoryMap = products_category_map(categories);
console.log(productsCategoryMap);
