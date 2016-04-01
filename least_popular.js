module.exports = function(object) {
  var minCount = 0;
  var leastPopular = "";
  for (var item in object) {
    if (object[item] === minCount) {
      leastPopular += " and " + item;
    }
    if ((object[item] < minCount) || (minCount === 0)) {
      minCount = object[item];
      leastPopular = item;
    }

  }


  var obj = {};
  var theLeastPopular = leastPopular.split(" and ");
  for (i = 0; i < theLeastPopular.length; i++) {
    obj[theLeastPopular[i]] = minCount;
  }
  //console.log(obj);
  return obj;

}


// least_popular({ 'Milk 1l': 39,
//   'Imasi': 30,
//   'Bread': 45,
//   'Chakalaka Can': 23,
//   'Gold Dish Vegetable Curry Can': 17,
//   'Fanta 500ml': 33,
//   'Coke 500ml': 54,
//   'Cream Soda 500ml': 22,
//   'Iwisa Pap 5kg': 17,
//   'Top Class Soy Mince': 22,
//   'Shampoo 1 litre': 3,
//   'Soap Bar': 12,
//   'Bananas - loose': 47,
//   'Apples - loose': 36,
//   'Mixed Sweets 5s': 49 }
// );
