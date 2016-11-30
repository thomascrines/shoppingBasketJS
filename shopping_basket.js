// Discounts:

// - 10% discount for all shopping baskets over £20
// - If the customer has a valid discount card then they get an additional 5% off.

var shoppingBasket = {
  contents: [],
  value: 0,
  discountCard: false,
  add: function(item) { 
  this.contents.push(item);
},
remove: function(item) {
  for (content of this.contents) {
    if (content === item) {
      var toDeleteIndex = this.contents.indexOf(content);
    }
  }
  this.contents.splice(toDeleteIndex, 1);
},
calculateValue: function() {
  for(content of this.contents){
    this.value += content.price;
  }
},
tenPcDiscount: function() {
  if (this.value >= 20) {
    var newValue = (this.value * .72);
    this.value = newValue;
  } 
},
};

module.exports = shoppingBasket;