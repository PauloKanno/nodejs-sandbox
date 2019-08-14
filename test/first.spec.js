var expect    = require("chai").expect;
var add = require("../src/sum").add;

describe("Sum", function() {
  describe("SumOnePlusOne", function() {
    it("sum 1 + 1 expects to be 2", function() {
        expect(add(1,1)).to.equal(2);
    });
    it("sum 1 + 2 expects to be 3", function() {
        expect(add(1,2)).to.equal(3);
    });
  });
});