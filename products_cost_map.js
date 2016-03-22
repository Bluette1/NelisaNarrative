module.exports = function(file) {

  var shopList = [];
  for (i = 1; i < file.length; i++) {
    var factors = file[i].split(';');


        if(shopList.indexOf(factors[0]) < 0){
          shopList.push(factors[0]);
        }


  }


  var productsMap = {};

  for (i = 0; i < shopList.length; i++) {
    var found = false;

    productsMap[shopList[i]] = {};
    for (j = 1; j < file.length; j++) {
      var factors = file[j].split(';');

      if (factors[0] === shopList[i]) {


        for (k = 0; k < factors.length; k++) {
          if (!(isNaN(factors[k]))) {
            //console.log(factors[k-1]
            productsMap[shopList[i]][factors[k - 1]] = factors[k + 1];


          }

        }

      }

    }



  }

  //console.log(productsMap);
  return productsMap;

};
