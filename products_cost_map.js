module.exports = function(file) {
  var productsList = [];
  for (i = 0; i < file.length; i++) {
    var factors = file[i].split(';');
    for (j = 0; j < factors.length; j++) {
      if (!(isNaN(factors[j]))) {
        if (productsList.indexOf(factors[j - 1]) < 0) {
          productsList.push(factors[j - 1]);
        }
      }
    }
  }
  var shopList = [];
  for (i = 1; i < file.length; i++) {
    var factors = file[i].split(';');
    shopList.push(factors[0]);
    // for(j=0;j < factors.length; j++){
    //   if (!(isNaN(factors[j]))){
    //     if(productsList.indexOf(factors[j-1]) < 0){
    //       productsList.push(factors[j-1]);
    //     }
    //   }
    // }
  }

  //console.log(productsList);
  var productsMap = {};

  for (i = 0; i < shopList.length; i++) {
    var found = false;
    //var shop =shopList[i];
    productsMap[shopList[i]] = {};
    for (j = 1; j < file.length; j++) {
      var factors = file[j].split(';');

      if (factors[0] === shopList[i]) {
        found = true;

        for (k = 0; k < factors.length; k++) {
          if (!(isNaN(factors[k]))) {
            //console.log(factors[k-1]
            productsMap[shopList[i]][factors[k - 1]] = factors[k + 1];

            //productsMap[shop[productsList[i]]]=factors[k+1];

            //break;
          }

        }
        var l = 0;
        for (l = j + 1; l < file.length; l++) {
          var factors = file[l].split(';');
          if (factors[0] === shopList[i]) {

            for (k = 0; k < factors.length; k++) {
              if (!(isNaN(factors[k]))) {
                //console.log(factors[k-1]
                productsMap[shopList[i]][factors[k - 1]] = factors[k + 1];

                //productsMap[shop[productsList[i]]]=factors[k+1];

                //break;
              }

            }
          }
        }
        j = l + 1;
      }
      if (found) {
        break;
      }
    }

    //productsMap[factors[0]]
    //console.log(factors);

  }

  //console.log(productsMap);
  return productsMap;

};
