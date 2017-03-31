/* jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const bowling = require('../bowling.js');


describe('bowling',() => {
  it('should be a function', () =>{
    expect(bowling).to.be.a('function');
  });

  it('should be a score a single frame', () =>{
    expect(bowling([{ball1:0,ball2:0}])).to.be.a('number');
    expect(bowling([{ball2:0}])).to.be.a('number');
    expect(bowling([{ball1:0}])).to.be.a('number');
    expect(bowling([{ball1:3,ball2:4}])).to.be.equal(7);
    expect(bowling([{ball1:0,ball2:10}])).to.be.equal(10);
  });




});

