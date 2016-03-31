module.exports = function(){
  var readTheFile = require('./readTheFile');
  var week1 = readTheFile('/home/coder/NelisaNarrative/week1.csv');
  var week2 = readTheFile('/home/coder/NelisaNarrative/week2.csv');
  var week3 = readTheFile('/home/coder/NelisaNarrative/week3.csv');
  var week4 = readTheFile('/home/coder/NelisaNarrative/week4.csv');
  var purchases = readTheFile('/home/coder/NelisaNarrative/purchases.csv');
  var categories =readTheFile('/home/coder/NelisaNarrative/categories.csv');

  var products_price_map = require('./products_price_map');
  var products_cost_map = require('./products_cost_map');
  var productsPriceMap1 = products_price_map(week1);
  var productsPriceMap2 = products_price_map(week2);
  var productsPriceMap3 = products_price_map(week3);
  var productsPriceMap4 = products_price_map(week4);

  var products_quantity_map = require('./products_quantity_map');
  var productsQuantityMap1 = products_quantity_map(week1);
  var productsQuantityMap2 = products_quantity_map(week2);
  var productsQuantityMap3 = products_quantity_map(week3);
  var productsQuantityMap4 = products_quantity_map(week4);


  var productsCostMap = products_cost_map(purchases);
  var products_profit_map = require('./products_profit_map');
  var productsProfitMap1 = products_profit_map(productsPriceMap1, productsCostMap);
  var productsProfitMap2 = products_profit_map(productsPriceMap2, productsCostMap);
  var productsProfitMap3 = products_profit_map(productsPriceMap3, productsCostMap);
  var productsProfitMap4 = products_profit_map(productsPriceMap4, productsCostMap);


  var products_category_map = require('./products_category_map');
  var productsCategoryMap = products_category_map(categories);

  this.getMostPopular = function(n){
    var most_popular = require('./most_popular');
    var mostPopular1 = most_popular(productsQuantityMap1);
    var mostPopular2 = most_popular(productsQuantityMap2);
    var mostPopular3= most_popular(productsQuantityMap3);
    var mostPopular4 = most_popular(productsQuantityMap4);
    var most_popular_overall = require('./most_popular_overall');
    var mostPopular = most_popular_overall([mostPopular1,mostPopular2,mostPopular3,mostPopular4]);

    switch (n) {
      case 1: return mostPopular1 ;
        break;
      case 2: return mostPopular2;
        break;
      case 3: return mostPopular3;
          break;
      case 4: return mostPopular4;
            break;
      case 5: return mostPopular;
            break;
      default:
      break;
    }

  }


this.getLeastPopular = function(n){
  var least_popular = require('./least_popular');
  var leastPopular1 = least_popular(productsQuantityMap1);
  var leastPopular2 = least_popular(productsQuantityMap2);
  var leastPopular3= least_popular(productsQuantityMap3);
  var leastPopular4 = least_popular(productsQuantityMap4);
  var least_popular_overall = require('./least_popular_overall');
  var leastPopular = least_popular_overall([leastPopular1,leastPopular2,leastPopular3,leastPopular4]);
  switch (n) {
    case 1: return leastPopular1 ;
      break;
    case 2: return leastPopular2;
      break;
    case 3: return leastPopular3;
        break;
    case 4: return leastPopular4;
          break;
    case 5: return leastPopular;
          break;
    default:
    break;

  }
}

this.getMostProfitable = function(n){
  var most_profitable = require('./most_profitable');
  var mostProfitable1= most_profitable(productsProfitMap1);
  var mostProfitable2= most_profitable(productsProfitMap2);
  var mostProfitable3= most_profitable(productsProfitMap3);
  var mostProfitable4= most_profitable(productsProfitMap4);
  var most_profitable_overall = require('./most_profitable_overall');
  var mostProfitable =most_profitable_overall([mostProfitable1, mostProfitable2, mostProfitable3, mostProfitable4]);
  switch (n) {
    case 1: return mostProfitable1 ;
      break;
    case 2: return mostProfitable2;
      break;
    case 3: return mostProfitable3;
        break;
    case 4: return mostProfitable4;
          break;
    case 5: return mostProfitable;
          break;
    default:
    break;

  }
}


this.getMostProfitableCategory = function(m,n){
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

  var mostProfitableCateg1 = object1.getMostProfitableCategory1();
  var mostProfitableCateg2 = object2.getMostProfitableCategory1();
  var mostProfitableCateg3 = object3.getMostProfitableCategory1();
  var mostProfitableCateg4 = object4.getMostProfitableCategory1();
  var mostProfitableCateg=most_profitable_category_overall([mostProfitableCateg1,mostProfitableCateg2,mostProfitableCateg3,mostProfitableCateg4]);

  switch (m) {
    case 1:
    switch (n) {
      case 1: return mostProfitableCategory1 ;
        break;
      case 2: return mostProfitableCategory2;
        break;
      case 3: return mostProfitableCategory3;
          break;
      case 4: return mostProfitableCategory4;
            break;
      case 5: return mostProfitableCategory;
            break;

      default:
      break;

    }
      break;

      case 2:
      switch (n) {
        case 1: return mostProfitableCateg1 ;
          break;
        case 2: return mostProfitableCateg2;
          break;
        case 3: return mostProfitableCateg3;
            break;
        case 4: return mostProfitableCateg4;
              break;
        case 5: return mostProfitableCateg;
              break;
        default:
        break;
      }
        break;
    default:
    break;
  }


  }

  this.getMostPopularCategory = function(n){
    var most_popular_category = require('./most_popular_category');
    var mostPopularCategory1= most_popular_category(productsCategoryMap,productsQuantityMap1);
    var mostPopularCategory2= most_popular_category(productsCategoryMap,productsQuantityMap2);
    var mostPopularCategory3= most_popular_category(productsCategoryMap,productsQuantityMap3);
    var mostPopularCategory4= most_popular_category(productsCategoryMap,productsQuantityMap4);
    var most_popular_category_overall = require('./most_popular_category_overall');
    var mostPopularCategory=most_popular_category_overall([mostPopularCategory1,mostPopularCategory2,mostPopularCategory3,mostPopularCategory4]);
    switch (n) {
      case 1: return mostPopularCategory1 ;
        break;
      case 2: return mostPopularCategory2;
        break;
      case 3: return mostPopularCategory3;
          break;
      case 4: return mostPopularCategory4;
            break;
      case 5: return mostPopularCategory;
            break;
      default:
      break;

    }
  }

this.getLeastPopularCategory = function(n){
  var least_popular_category = require('./least_popular_category');
  var leastPopularCategory1= least_popular_category(productsCategoryMap,productsQuantityMap1);
  var leastPopularCategory2= least_popular_category(productsCategoryMap,productsQuantityMap2);
  var leastPopularCategory3= least_popular_category(productsCategoryMap,productsQuantityMap3);
  var leastPopularCategory4= least_popular_category(productsCategoryMap,productsQuantityMap4);
  var least_popular_category_overall = require('./least_popular_category_overall');
  var leastPopularCategory=least_popular_category_overall([leastPopularCategory1,leastPopularCategory2,leastPopularCategory3,leastPopularCategory4]);
  switch (n) {
    case 1: return leastPopularCategory1 ;
      break;
    case 2: return leastPopularCategory2;
      break;
    case 3: return leastPopularCategory3;
        break;
    case 4: return leastPopularCategory4;
          break;
    case 5: return leastPopularCategory;
          break;
    default:
    break;
  }
}

}
