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

  it('should be a score a multiple frames', () =>{
    //2 frames
    expect(bowling([{ball1:3,ball2:4},{ball1:3,ball2:4}])).to.be.equal(14);
      //10 frames
    expect(bowling([{ball1:3,ball2:4},{ball1:3,ball2:4},{ball1:3,ball2:4},{ball1:3,ball2:4},{ball1:3,ball2:4},{ball1:3,ball2:4},{ball1:3,ball2:4},{ball1:3,ball2:4},{ball1:3,ball2:4},{ball1:3,ball2:4}])).to.be.equal(70);
      });

  it('spare (total of 10) in a frame will add a bonus of the next first ball of the next frame', () =>{
  //2 frames with a spare, add only 3 balls.
  expect(bowling([{ball1:7,ball2:3},{ball1:4,ball2:2}])).to.be.equal(20);
  });

  it('strike on ball2 should be a spare', () =>{
  //2 frames with a spare, add only 3 balls.
  expect(bowling([{ball1:0,ball2:10},{ball1:4,ball2:2}])).to.be.equal(20);
  });

  it('strike on ball1 will should give next ball1 & ball2 bonus up to 9th frame', () =>{
  //strike with 3 balls
  expect(bowling([{ball1:10,ball2:0},{ball1:4,ball2:2}])).to.be.equal(22);
  });

  it('every strike should return ball1 & ball2 bonus up to the 9th frame', () =>{
  //2 strikes, 5 frames
  expect(bowling([{ball1:10,ball2:0},{ball1:4,ball2:2},{ball1:4,ball2:5},{ball1:10,ball2:0},{ball1:0,ball2:0}])).to.be.equal(41);
  });

  it('every strike should return ball1 & ball2 bonus and spares should return ball1 bonus up to the 9th frame', () =>{
  //2 strikes, 2 spares 9 frames
  expect(bowling([{ball1:10,ball2:0},{ball1:4,ball2:2},{ball1:4,ball2:5},{ball1:10,ball2:0},{ball1:0,ball2:0},{ball1:8,ball2:2},{ball1:6,ball2:3},{ball1:9,ball2:1},{ball1:2,ball2:3}])).to.be.equal(83);
  });

  it('On the 10th frame, a spare should add 11th frame ball 1', () =>{
  //2 strikes, 2 spares 9 frames
  expect(bowling([{ball1:10,ball2:0},{ball1:4,ball2:2},{ball1:4,ball2:5},{ball1:10,ball2:0},{ball1:0,ball2:0},{ball1:8,ball2:2},{ball1:6,ball2:3},{ball1:9,ball2:1},{ball1:2,ball2:3},{ball1:8,ball2:2},{ball1:7,ball2:4}])).to.be.equal(100);
  });

  it('On the 10th frame, a spare should add 11th frame ball1 and ball2', () =>{
  //2 strikes, 2 spares 9 frames
  expect(bowling([{ball1:10,ball2:0},{ball1:4,ball2:2},{ball1:4,ball2:5},{ball1:10,ball2:0},{ball1:0,ball2:0},{ball1:8,ball2:2},{ball1:6,ball2:3},{ball1:9,ball2:1},{ball1:2,ball2:3},{ball1:10,ball2:0},{ball1:7,ball2:3}])).to.be.equal(103);
  });




});

