const {add, mul, compare} = require('../src/index');
const {expect} = require('chai');
const should = require('chai').should();

describe('#math', function() {
  describe('#add func', function(){
    it('should return 5 when 2 add 3', function() {
      expect(add(3, 2)).to.equal(5);
    })
    // it.only
    it.skip('should return 9 when 3 add 6', function() {
      add(3, 6).should.equal(9);
    })
  })
  describe('#mul func', function() {
    it('should return 15 when 3 mul 5', function(){
      mul(3, 5).should.equal(15);
    })
  })
  describe('#compare func', function() {
    it('should return 16 when 8 compare 8', function() {
      compare(8, 8).should.equal(16);
    })
    it('should return 3 when 9 compare 6', function() {
      compare(9, 3).should.equal(6);
    })
    it('should return 9 when 6 compare 9', function() {
      compare(6, 9).should.equal(9);
    })
  })
})


