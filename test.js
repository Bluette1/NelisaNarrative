
var readTheFile = require('./readTheFile');
var week1 = readTheFile('/Users/BENPC/NelisaNarrative/week1.csv');
var week2 = readTheFile('/Users/BENPC/NelisaNarrative/week2.csv');
var week3 = readTheFile('/Users/BENPC/NelisaNarrative/week3.csv');
var week4 = readTheFile('/Users/BENPC/NelisaNarrative/week4.csv');

var products_price_map = require('./products_price_map');
var products_cost_map = require('./products_cost_map');
var productsPriceMap1 = products_price_map(week1);
var productsPriceMap2 = products_price_map(week2);
var productsPriceMap3 = products_price_map(week3);
var productsPriceMap4 = products_price_map(week4);
//console.log(productsPriceMap1);
//
var purchases = readTheFile('/Users/BENPC/NelisaNarrative/purchases.csv');
var productsCostMap = products_cost_map(purchases);
var products_profit_map = require('./products_profit_map');
var productsProfitMap1 = products_profit_map(productsPriceMap1, productsCostMap);
var productsProfitMap2 = products_profit_map(productsPriceMap2, productsCostMap);
var productsProfitMap3 = products_profit_map(productsPriceMap3, productsCostMap);
var productsProfitMap4 = products_profit_map(productsPriceMap4, productsCostMap);

var most_profitable = require('./most_profitable');
var mostProfitable1= most_profitable(productsProfitMap1);
var mostProfitable2= most_profitable(productsProfitMap2);
var mostProfitable3= most_profitable(productsProfitMap3);
var mostProfitable4= most_profitable(productsProfitMap4);
var most_profitable_overall = require('./most_profitable_overall');
var mostProfitable =most_profitable_overall([mostProfitable1, mostProfitable2, mostProfitable3, mostProfitable4]);
//console.log(mostProfitable);

var categories =readTheFile('/Users/BENPC/NelisaNarrative/categories.csv');
var products_category_map = require('./products_category_map');
var productsCategoryMap = products_category_map(categories);
var most_profitable_category = require('./most_profitable_category');
var object1= new most_profitable_category(productsCategoryMap,productsProfitMap1);
var mostProfitableCategory1 = object1.getMostProfitableCategory();
var object2= new most_profitable_category(productsCategoryMap,productsProfitMap2);
var mostProfitableCategory2 = object2.getMostProfitableCategory();
var object3= new most_profitable_category(productsCategoryMap,productsProfitMap3);
var mostProfitableCategory3 = object3.getMostProfitableCategory();
var object4= new most_profitable_category(productsCategoryMap,productsProfitMap4);
var mostProfitableCategory4 = object4.getMostProfitableCategory();
var most_profitable_category_overall = require('./most_profitable_category_overall');
var mostProfitableCategory=most_profitable_category_overall([mostProfitableCategory1,mostProfitableCategory2,mostProfitableCategory3,mostProfitableCategory4]);
console.log(mostProfitableCategory);

//If Nelisa buys from cheapest supplier:

var mostProfitableCateg1 = object1.getMostProfitableCategory1();
var mostProfitableCateg2 = object2.getMostProfitableCategory1();
var mostProfitableCateg3 = object3.getMostProfitableCategory1();
var mostProfitableCateg4 = object4.getMostProfitableCategory1();
var mostProfitableCateg=most_profitable_category_overall([mostProfitableCateg1,mostProfitableCateg2,mostProfitableCateg3,mostProfitableCateg4]);
console.log(mostProfitableCateg);

// var products_quantity_map = require('./products_quantity_map');
// var productsQuantityMap1 = products_quantity_map(week1);
// var productsQuantityMap2 = products_quantity_map(week2);
// var productsQuantityMap3 = products_quantity_map(week3);
// var productsQuantityMap4 = products_quantity_map(week4);
//
//
// var most_popular_category = require('./most_popular_category');
// var mostPopularCategory1= most_popular_category(productsCategoryMap,productsQuantityMap1);
// var mostPopularCategory2= most_popular_category(productsCategoryMap,productsQuantityMap2);
// var mostPopularCategory3= most_popular_category(productsCategoryMap,productsQuantityMap3);
// var mostPopularCategory4= most_popular_category(productsCategoryMap,productsQuantityMap4);
// var most_popular_category_overall = require('./most_popular_category_overall');
// var mostPopularCategory=most_popular_category_overall([mostPopularCategory1,mostPopularCategory2,mostPopularCategory3,mostPopularCategory4]);
// //console.log(mostPopularCategory);
//
// var least_popular_category = require('./least_popular_category');
// var leastPopularCategory1= least_popular_category(productsCategoryMap,productsQuantityMap1);
// var leastPopularCategory2= least_popular_category(productsCategoryMap,productsQuantityMap2);
// var leastPopularCategory3= least_popular_category(productsCategoryMap,productsQuantityMap3);
// var leastPopularCategory4= least_popular_category(productsCategoryMap,productsQuantityMap4);
// var least_popular_category_overall = require('./least_popular_category_overall');
// var leastPopularCategory=least_popular_category_overall([leastPopularCategory1,leastPopularCategory2,leastPopularCategory3,leastPopularCategory4]);
// //console.log(leastPopularCategory);
