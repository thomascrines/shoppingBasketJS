var capsicum = require('../capsicum');
var assert = require('assert');

describe('capsicum', function() {
  it('has name', function() {
    assert.equal('capsicum', capsicum.name);
  });
});

it('has price', function() {
  assert.equal(0.70, capsicum.price);
});

it('has buy one get one free', function() {
  assert.equal(false, capsicum.buyOneGetOneFree);
});