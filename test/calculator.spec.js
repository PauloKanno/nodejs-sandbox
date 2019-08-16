var expect    = require("chai").expect;
var Calculator = require("../src/Calculator/index");

describe("Calculator", function() {
  describe("Addition", function() {
    it("1 + 1 expects to be 2", function() {
        expect(Calculator.addition(1,1)).to.equal(2);
    });
  });
  describe("Subtraction", function() {
    it("1 - 1 expects to be 0", function() {
        expect(Calculator.subtraction(1,1)).to.equal(0);
    });
  });
  describe("Multiply", function() {
    it("2*3 expects to be 6", function() {
        expect(Calculator.multiply(2,3)).to.equal(6);
    });
  });
  describe("Division", function() {
    it("10/2 expects to be 5", function() {
        expect(Calculator.division(10,2)).to.equal(5);
    });
    it("1/0 expects to be an error", function() {
      expect(() => {Calculator.division(1,0)}).to.throw(/Illegal operation. Division by zero/);
  });
  });
});