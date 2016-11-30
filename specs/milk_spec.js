var milk = require('../milk');
var assert = require('assert');

describe('milk', function() {
  it('has name', function() {
    assert.equal('punnet of milk', milk.name);
  });
});

it('has price', function() {
  assert.equal(2.70, milk.price);
});

it('has buy one get one free', function() {
  assert.equal(false, milk.buyOneGetOneFree);
});