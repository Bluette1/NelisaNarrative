module.exports = function(productsPriceMap, productsCostMap) {
  var productsProfitMap = {};

  for (var shop in productsCostMap) {
    productsProfitMap[shop] = {};
    for (var product in productsCostMap[shop]) {

      if (productsPriceMap.hasOwnProperty(product)) {


        var priceArray = productsPriceMap[product].split('R');

        var price = priceArray[1];

        var costArray = productsCostMap[shop][product].split('R');

        var characters = costArray[1].split("");
        for (i = 0; i < characters.length; i++) {
          if (characters[i] === ',') {
            characters[i] = '.';
          }

        }
        costArray[1] = characters.join("");
        // console.log(costArray[1]);
        // console.log(isNaN(costArray[1]));
        var cost = costArray[1];

        var profit = Number(price) - Number(cost);
        productsProfitMap[shop][product] = profit;
      }
    }
  }
  //console.log(productsProfitMap);
  return productsProfitMap;
}
