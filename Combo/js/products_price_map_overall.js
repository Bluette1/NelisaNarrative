
module.exports = function(file1, file2,file3,file4){
var productsList = [];
var n =1;
while(n < 5){
var file =[];
if(n ===1){
  file = file1;
}
else if (n===2) {
  file  = file2;
}

else if (n===3) {
  file = file3;
}

else if (n===4) {
  file = file4;
}

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
n++;
}


  //console.log(productsList);
  var productsMap = {};
  var m =1;
  while(m < 5){
  var file =[];
  if(m ===1){
    file = file1;
  }
  else if (m===2) {
    file  = file2;
  }

  else if (m===3) {
    file = file3;
  }

  else if (m===4) {
    file = file4;
  }

  for (i = 0; i < productsList.length; i++) {

    for (j = 0; j < file.length; j++) {

      var factors = file[j].split(",");
      var found = false;
      //console.log(factors);
      for (k = 0; k < factors.length; k++) {
        if (!(isNaN(factors[k]))) {
          //console.log(factors[k-1]);
          if (productsList[i] === factors[k - 1]) {
            var p = factors[k + 1].split("\r");
            var price = p[0].split('R');
            productsMap[productsList[i]] = Number(price[1]);
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
m++;
}


//console.log(productsMap);
  return productsMap;

}


//
// products_price_map(file1, file2, file3, file4);
