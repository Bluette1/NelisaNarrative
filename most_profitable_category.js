//Finds the total profit per unit sold

module.exports = function(productsCategoryMap, productsProfitMap){
var mostProfitableCategory ="";
var mostProfitableCategory1 ="";
var maxProfit = 0;
var maxProfit1 =0;
for(var category in productsCategoryMap){
  var totalProfit = 0;
  var totalProfit1 =0;
  var item = productsCategoryMap[category];

  for(i=0; i < item.length; i++){
    var total =0;//console.log(item[i]);
    var count =0;
    var array =[];
for(var shop in productsProfitMap){
   if(productsProfitMap[shop].hasOwnProperty(item[i])){
     count++;
     total += productsProfitMap[shop][item[i]];
     array.push([productsProfitMap[shop][item[i]]]);
   }
}
var averageProfitPerUnit =total/count;
totalProfit +=averageProfitPerUnit;
var profitPerUnit = Math.max.apply(null, array);
totalProfit1 += profitPerUnit;
}
if(totalProfit===maxProfit){
  mostProfitableCategory += " and " + category;
}

if(totalProfit > maxProfit){
  maxProfit = totalProfit;
  mostProfitableCategory = category;
}
//console.log("finished " + category);
if(totalProfit1===maxProfit1){
  mostProfitableCategory1 += " and " + category;
}

if(totalProfit1 > maxProfit1){
  maxProfit1 = totalProfit1;
  mostProfitableCategory1 = category;
}
}
var obj ={};
console.log(mostProfitableCategory);
var theMostProfitableCategory =mostProfitableCategory.split(" and ");
for(i=0;i < theMostProfitableCategory.length; i++){
  obj[theMostProfitableCategory[i]]=maxProfit;
}
var obj1 ={};
var theMostProfitableCategory1 =mostProfitableCategory1.split(" and ");
for(i=0;i < theMostProfitableCategory1.length; i++){
  obj1[theMostProfitableCategory1[i]]=maxProfit1;
}

this.getMostProfitableCategory = function(){
  return obj;
}

this.getMostProfitableCategory1 = function(){
  //console.log("If Nelisa buys from the cheapest supplier: ");
  return obj1;
}

};
