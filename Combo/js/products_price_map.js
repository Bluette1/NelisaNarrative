module.exports = function(file) {
  var productsList = [];
  for (i = 0; i < file.length; i++) {
    var factors = file[i].split(",");
    for (j = 0; j < factors.length; j++) {
      if (!(isNaN(factors[j]))) {
        if (productsList.indexOf(factors[j - 1]) < 0) {
          productsList.push(factors[j - 1]);
        }
      }
    }
  }
  //console.log(productsList);
  var productsMap = {};


  for (i = 0; i < productsList.length; i++) {

    for (j = 0; j < file.length; j++) {

      var factors = file[j].split(",");
      var found = false;
      //console.log(factors);
      for (k = 0; k < factors.length; k++) {
        if (!(isNaN(factors[k]))) {
          //console.log(factors[k-1]);
          if (productsList[i] === factors[k - 1]) {
            price = factors[k + 1].split("\r");
            productsMap[productsList[i]] = price[0];
            found = true;
            break;
          }
        }

      }
      if (found) {
        break;
      }
    }

  }


console.log(productsMap);
  return productsMap;

}
