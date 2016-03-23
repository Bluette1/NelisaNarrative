
module.exports = function(arrayOfObjects){
var mostProfitableMap={};
var mostProfitable ="";
var maxProfit =0;


for(i =0; i < arrayOfObjects.length; i++){

  for(var key in arrayOfObjects[i]){
    if (arrayOfObjects[i][key] ===maxProfit) {
      mostProfitable += " and " + key;

    }
    if(arrayOfObjects[i][key] > maxProfit){
      maxProfit =  arrayOfObjects[i][key];
      mostProfitable = key;

    }
  }
}

var arrayMostProfitable = mostProfitable.split(" and ");
for(i=0; i < arrayMostProfitable.length; i++){
  mostProfitableMap[arrayMostProfitable[i]] =maxProfit;
}

//console.log(mostProfitableMap);
return mostProfitableMap;
}
