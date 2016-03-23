module.exports = function(productsPriceMap, productsCostMap){
var maxProfit =0;
var mostProfitable ="";
for(var shop in productsCostMap){
  for(var product in productsCostMap[shop]){

if(productsPriceMap.hasOwnProperty(product)){

  var priceArray =productsPriceMap[product].split('R');

  var price =priceArray[1];

  var costArray = productsCostMap[shop][product].split('R');

  var characters = costArray[1].split("");
  for(i=0;i < characters.length;i++){
    if(characters[i] === ','){
      characters[i] = '.';
    }

  }
  costArray[1]=characters.join("");
  // console.log(costArray[1]);
  // console.log(isNaN(costArray[1]));
  var cost = costArray[1];

  var profit = Number(price)-Number(cost);
  
  //console.log(profit);
  if(profit===maxProfit){
    mostProfitable += " and " + product +" from "+shop;
  }

  if(profit > maxProfit){
    maxProfit = profit;
    mostProfitable = product +" from "+shop;
  }
}


  }


}
var obj ={};
var theMostProfitable =mostProfitable.split(" and ");
for(i=0;i < theMostProfitable.length; i++){
  obj[theMostProfitable[i]]=maxProfit;
}
return obj;
}
