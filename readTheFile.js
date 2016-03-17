var read = function(pathToFile){

  var fs = require("fs");
var file = fs.readFileSync(pathToFile, 'utf8');
file =file.split("\n");
file.pop();
var productsList =[];
//console.log(file);
for(i=0;i < file.length; i++){
var factors = file[i].split(",");
for(j=0;j < factors.length; j++){
  if (!(isNaN(factors[j]))){
    if(productsList.indexOf(factors[j-1]) < 0){
      productsList.push(factors[j-1]);
    }
  }
}
}
//console.log(productsList);
var productsMap = {};

var mostPopular = "";
for(i=0; i < productsList.length; i++){
  var total = 0;
  for(j=0;j < file.length; j++){

    var factors = file[j].split(",");
    //console.log(factors);
    for(k=0;k < factors.length; k++){
      if (!(isNaN(factors[k]))){
        //console.log(factors[k-1]);
        if(productsList[i]===factors[k-1]){
          total += Number(factors[k]);
        }
    }

    }

}

productsMap[productsList[i]]=total;

}
console.log(productsMap);
return productsMap;
};

read('./week1.csv');
