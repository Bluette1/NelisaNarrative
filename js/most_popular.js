module.exports = function(object) {
  var maxCount = 0;
  var most_popular = "";
  for (var item in object) {
    if (object[item] === maxCount) {
      most_popular += " and " + item;
    }
    if (object[item] > maxCount) {
      maxCount = object[item];
      most_popular = item;
    }

  }


  var obj = {};
  var theMostPopular = most_popular.split(" and ");
  for (i = 0; i < theMostPopular.length; i++) {
    obj[theMostPopular[i]] = maxCount;
  }
  //console.log(obj);
  return obj;

}


// most_popular({ 'Milk 1l': 39,
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
