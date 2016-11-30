var bananas = require('../bananas');
var assert = require('assert');

describe('bananas', function() {
  it('has name', function() {
    assert.equal('punnet of bananas', bananas.name);
  });
});

it('has price', function() {
  assert.equal(2.70, bananas.price);
});

it('has buy one get one free', function() {
  assert.equal(false, bananas.buyOneGetOneFree);
});