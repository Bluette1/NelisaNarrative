//Finds the total profit per unit sold

module.exports = function(productsCategoryMap, productsPriceMap, productsCostMap){
var mostProfitableCategory ="";
var maxProfit = 0;
for(var category in productsCategoryMap){
  var totalProfit = 0;
  var item = productsCategoryMap[category];

  for(i=0; i < item.length; i++){
    //console.log(item[i]);

 if(productsPriceMap.hasOwnProperty(item[i])){
//console.log(productsPriceMap[item[i]]);
        var priceArray =productsPriceMap[item[i]].split('R');
        var price =priceArray[1];
        //console.log(price);
        for(var shop in productsCostMap){


          if(productsCostMap[shop].hasOwnProperty(item[i])){
            //console.log("Yeah: " + shop + ": " + item[i]);


            var costArray = productsCostMap[shop][item[i]].split('R');


            var characters = costArray[1].split("");
            for(j=0;j < characters.length;j++){
              if(characters[j] === ','){
                characters[j] = '.';
              }

            }
            costArray[1]=characters.join("");


            var cost = costArray[1];
            //console.log(cost);
            //console.log(cost);

            var profit = Number(price)-Number(cost);
            totalProfit += profit;
            //console.log(totalProfit);



        }
      }

 }
}
if(totalProfit===maxProfit){
  mostProfitableCategory += " and " + category;
}

if(totalProfit > maxProfit){
  maxProfit = totalProfit;
  mostProfitableCategory = category;
}
//console.log("finished " + category);

}
var obj ={};
var theMostProfitableCategory =mostProfitableCategory.split(" and ");
for(i=0;i < theMostProfitableCategory.length; i++){
  obj[theMostProfitableCategory[i]]=maxProfit;
}
return obj;

};
