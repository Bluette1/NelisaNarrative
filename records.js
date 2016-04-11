module.exports = function() {

  var getFile = function(name) {
    var readTheFile = require('./readTheFile');
    switch (name) {
      case "week1":
        return readTheFile('./week1.csv');
        break;
      case "week2":
        return readTheFile('./week2.csv');
        break;
      case "week3":
        return readTheFile('./week3.csv');
        break;
      case "week4":
        return readTheFile('./week4.csv');
        break;
      case "purchases":
        return readTheFile('./purchases.csv');
        break;
      case "categories":
        return readTheFile('./categories.csv');
        break;
      default:
        break;

    }
  }

  var getProductsPriceMap = function(n) {
    var products_price_map = require('./products_price_map');
    var products_profit_map = require('./products_profit_map');
    switch (n) {
      case 1:
        return products_price_map(getFile("week1"));
        break;
      case 2:
        return products_price_map(getFile("week2"));
        break;
      case 3:
        return products_price_map(getFile("week3"));
        break;
      case 4:
        return products_price_map(getFile("week4"));
        break;
      default:
        break;
    }
  }

  //var productsPriceMap4 = products_price_map(week4);

  var getProductsQuantityMap = function(n) {
    var products_quantity_map = require('./products_quantity_map');
    switch (n) {
      case 1:
        return products_quantity_map(getFile("week1"));
        break;
      case 2:
        return products_quantity_map(getFile("week2"));
        break;
      case 3:
        return products_quantity_map(getFile("week3"));
        break;
      case 4:
        return products_quantity_map(getFile("week4"));
        break;
      default:
        break;
    }
  }

  var getProductsProfitMap = function(n) {
    var products_cost_map = require('./products_cost_map');
    var productsCostMap = products_cost_map(getFile("purchases"));
    var products_profit_map = require('./products_profit_map');
    switch (n) {
      case 1:
        return products_profit_map(getProductsPriceMap(1), productsCostMap);
        break;
      case 2:
        return products_profit_map(getProductsPriceMap(2), productsCostMap);
        break;
      case 3:
        return products_profit_map(getProductsPriceMap(3), productsCostMap);
        break;
      case 4:
        return products_profit_map(getProductsPriceMap(4), productsCostMap);
        break;
      default:
        break;

    }

  }


  this.getMostPopular = function(n) {
    var most_popular = require('./most_popular');

    switch (n) {
      case 1:
        return most_popular(getProductsQuantityMap(1));

        break;
      case 2:
        return most_popular(getProductsQuantityMap(2));

        break;
      case 3:
        return most_popular(getProductsQuantityMap(3));

        break;
      case 4:
        return most_popular(getProductsQuantityMap(4));

        break;
      case 5:
        var most_popular_overall = require('./most_popular_overall');
        return most_popular_overall([most_popular(getProductsQuantityMap(1)), most_popular(getProductsQuantityMap(2)), most_popular(getProductsQuantityMap(3)), most_popular(getProductsQuantityMap(4))]);
        break;
      default:
        break;
    }

  }

  this.getLeastPopular = function(n) {
    var least_popular = require('./least_popular');

    switch (n) {
      case 1:
        return least_popular(getProductsQuantityMap(1));

        break;
      case 2:
        return least_popular(getProductsQuantityMap(2));

        break;
      case 3:
        return least_popular(getProductsQuantityMap(3));

        break;
      case 4:
        return least_popular(getProductsQuantityMap(4));

        break;
      case 5:
        var least_popular_overall = require('./least_popular_overall');
        return least_popular_overall([least_popular(getProductsQuantityMap(1)), least_popular(getProductsQuantityMap(2)), least_popular(getProductsQuantityMap(3)), least_popular(getProductsQuantityMap(4))]);
        break;
      default:
        break;
    }

  }


  this.getMostProfitable = function(n) {
    var most_profitable = require('./most_profitable');

    switch (n) {
      case 1:
        return most_profitable(getProductsProfitMap(1));

        break;
      case 2:
        return most_profitable(getProductsProfitMap(2));

        break;
      case 3:
        return most_profitable(getProductsProfitMap(3));

        break;
      case 4:
        return most_profitable(getProductsProfitMap(4));

        break;
      case 5:
        var most_profitable_overall = require('./most_profitable_overall');
        return most_profitable_overall([most_profitable(getProductsProfitMap(1)), most_profitable(getProductsProfitMap(2)), most_profitable(getProductsProfitMap(3)), most_profitable(getProductsProfitMap(4))]);
        break;
      default:
        break;
    }

  }


  var getProductsCategoryMap = function() {
    var products_category_map = require('./products_category_map');
    return products_category_map(getFile("categories"));
  }

  this.getMostProfitableCategory = function(m, n) {

    var most_profitable_category = require('./most_profitable_category');
    var object1 = new most_profitable_category(getProductsCategoryMap(), getProductsProfitMap(1));
    var object2 = new most_profitable_category(getProductsCategoryMap(), getProductsProfitMap(2));
    var object3 = new most_profitable_category(getProductsCategoryMap(), getProductsProfitMap(3));
    var object4 = new most_profitable_category(getProductsCategoryMap(), getProductsProfitMap(4));
    var most_profitable_category_overall = require('./most_profitable_category_overall');


    switch (m) {
      case 1:
        switch (n) {
          case 1:
            return object1.getMostProfitableCategory();

            break;
          case 2:
            return object2.getMostProfitableCategory();

            break;
          case 3:
            return object3.getMostProfitableCategory();

            break;
          case 4:
            return object4.getMostProfitableCategory();

            break;
          case 5:
            return most_profitable_category_overall([object1.getMostProfitableCategory(), object2.getMostProfitableCategory(), object3.getMostProfitableCategory(), object4.getMostProfitableCategory()]);

            break;

          default:
            break;

        }
        break;

      case 2:
        switch (n) {
          case 1:
            return object1.getMostProfitableCategory1();

            break;
          case 2:
            return object2.getMostProfitableCategory1();

            break;
          case 3:
            return object3.getMostProfitableCategory1();

            break;
          case 4:
            return object4.getMostProfitableCategory1();

            break;
          case 5:
            return most_profitable_category_overall([object1.getMostProfitableCategory1(), object2.getMostProfitableCategory1(), object3.getMostProfitableCategory1(), object4.getMostProfitableCategory1()]);

            break;

          default:
            break;

        }
        break;
      default:
        break;
    }


  }

  this.getMostPopularCategory = function(n) {
    var most_popular_category = require('./most_popular_category');

    switch (n) {
      case 1:
        return most_popular_category(getProductsCategoryMap(), getProductsQuantityMap(1));

        break;
      case 2:
        return most_popular_category(getProductsCategoryMap(), getProductsQuantityMap(2));

        break;
      case 3:
        return most_popular_category(getProductsCategoryMap(), getProductsQuantityMap(3));

        break;
      case 4:
        return most_popular_category(getProductsCategoryMap(), getProductsQuantityMap(4));

        break;
      case 5:
        var most_popular_category_overall = require('./most_popular_category_overall');
        return most_popular_category_overall([most_popular_category(getProductsCategoryMap(), getProductsQuantityMap(1)), most_popular_category(getProductsCategoryMap(), getProductsQuantityMap(2)), most_popular_category(getProductsCategoryMap(), getProductsQuantityMap(3)), most_popular_category(getProductsCategoryMap(), getProductsQuantityMap(4))]);

        break;
      default:
        break;

    }
  }

  this.getLeastPopularCategory = function(n) {
    var least_popular_category = require('./least_popular_category');

    switch (n) {
      case 1:
        return least_popular_category(getProductsCategoryMap(), getProductsQuantityMap(1));

        break;
      case 2:
        return least_popular_category(getProductsCategoryMap(), getProductsQuantityMap(2));

        break;
      case 3:
        return least_popular_category(getProductsCategoryMap(), getProductsQuantityMap(3));

        break;
      case 4:
        return least_popular_category(getProductsCategoryMap(), getProductsQuantityMap(4));

        break;
      case 5:
        var least_popular_category_overall = require('./least_popular_category_overall');
        return least_popular_category_overall([least_popular_category(getProductsCategoryMap(), getProductsQuantityMap(1)), least_popular_category(getProductsCategoryMap(), getProductsQuantityMap(2)), least_popular_category(getProductsCategoryMap(), getProductsQuantityMap(3)), least_popular_category(getProductsCategoryMap(), getProductsQuantityMap(4))]);

        break;
      default:
        break;

    }
  }
}
