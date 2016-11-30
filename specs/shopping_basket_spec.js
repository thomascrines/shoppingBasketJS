var basket = require('../shopping_basket')
var capsicum = require('../capsicum');
var eggs = require('../eggs');
var milk = require('../milk');
var sunflowerOil = require('../sunflower_oil');
var bananas = require('../bananas');
var assert = require('assert');

  beforeEach(function() {
    basket.contents = [];
  });


describe('basket', function() {
it('has contents', function() {
  assert.equal(0, basket.contents.length);
});

it('can add items', function() {
  basket.add(bananas);
  assert.equal(1, basket.contents.length);
});

it('can remove items', function() {
  basket.add(bananas);
  basket.add(capsicum);
  basket.add(eggs);
  basket.remove(capsicum);
  assert.equal(2, basket.contents.length);
});

it('can find total price', function(){
  basket.add(bananas);
  basket.add(capsicum);
  basket.add(eggs);
  basket.calculateValue();
  assert.equal(5.00, basket.value);
});

it('can apply 10pc disc.', function() {
  basket.add(sunflowerOil);
  basket.add(sunflowerOil);
  basket.add(sunflowerOil);
  basket.add(sunflowerOil);
  basket.calculateValue();
  basket.tenPcDiscount();
  assert.equal(18, basket.value);
})

it('can apply 100pc disc.', function() {
  basket.add(milk);
  basket.add(eggs);
  basket.add(capsicum);
  basket.add(sunflowerOil);
  basket.calculateValue();
  basket.tenPcDiscount();
  assert.equal(10.00, basket.value);
})
});
