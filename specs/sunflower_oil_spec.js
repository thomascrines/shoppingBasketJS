var sunflowerOil = require('../sunflower_oil');
var assert = require('assert');

describe('sunflowerOil', function() {
  it('has name', function() {
    assert.equal('punnet of sunflower oil', sunflowerOil.name);
  });
});

it('has price', function() {
  assert.equal(5.00, sunflowerOil.price);
});

it('has buy one get one free', function() {
  assert.equal(false, sunflowerOil.buyOneGetOneFree);
});