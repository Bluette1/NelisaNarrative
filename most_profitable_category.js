module.exports = function(productsCategoryMap, productsPriceMap, productsCostMap){
var mostProfitableCategory ="";
var maxProfit = 0;
for(var category in productsCategoryMap){
  var totalProfit = 0;
  var item = productsCategoryMap[category];

  for(i=0; i < item.length; i++){
    console.log(item[i]);

 if(productsPriceMap.hasOwnProperty(item[i])){
console.log(productsPriceMap[item[i]]);
        var priceArray =productsPriceMap[item[i]].split('R');
        var price =priceArray[1];
        console.log(price);
//         for(var shop in productsCostMap){
//
//
//           if(productsCostMap[shop].hasOwnProperty(item[i])){
//             // console.log(shop);
//             // console.log(productsCostMap[shop]);
//             // console.log(item[i]);
//             // console.log(productsCostMap[shop][item[i]]);
//
//             var costArray = productsCostMap[shop][item[i]].split('R');
// //console.log(costArray);
//             var characters = costArray[1].split("");
//             for(i=0;i < characters.length;i++){
//               if(characters[i] === ','){
//                 characters[i] = '.';
//               }
//
//             }
//             costArray[1]=characters.join("");
//             // console.log(costArray[1]);
//             // console.log(isNaN(costArray[1]));
//             var cost = costArray[1];
//
//             var profit = Number(price)-Number(cost);
//             totalProfit += profit;
//             //console.log(profit);
//
//
//
//         }
//       }
//
 }
}
if(totalProfit===maxProfit){
  mostProfitableCategory += " and " + category;
}

if(totalProfit > maxProfit){
  maxProfit = totalProfit;
  mostProfitableCategory = category;
}

}
return mostProfitableCategory + ": " + maxProfit;

};
