var eggs = require('../eggs');
var assert = require('assert');

describe('eggs', function() {
  it('has name', function() {
    assert.equal('punnet of eggs', eggs.name);
  });
});

it('has price', function() {
  assert.equal(1.60, eggs.price);
});

it('has buy one get one free', function() {
  assert.equal(false, eggs.buyOneGetOneFree);
});