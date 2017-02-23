"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theta360_1 = require("../lib/theta360");
var chai_1 = require("chai");
var EXPECTED = '<iframe class="hexo-tag-theta360" src="https://theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho?view=embed" frameBorder="0"></iframe>';
describe("Theta 360 simple tag", function () {
    it("generates the correct HTML when provided with full url", function () {
        var testUrl = "https://theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho";
        var result = theta360_1.Theta360.simple(testUrl);
        chai_1.expect(result).to.be.equal(EXPECTED);
    });
    it("generates the correct HTML when provided with complete url", function () {
        var testUrl = "https://www.theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho";
        var result = theta360_1.Theta360.simple(testUrl);
        chai_1.expect(result).to.be.equal(EXPECTED);
    });
    it("generates the correct HTML when provided with image code", function () {
        var imageCode = "fHmW9N6LuKPPp6pqmnPt1vpho";
        var result = theta360_1.Theta360.simple(imageCode);
        chai_1.expect(result).to.be.equal(EXPECTED);
    });
    it("returns empty string when null is passed", function () {
        var result = theta360_1.Theta360.simple(null);
        chai_1.expect(result).to.be.equal("");
    });
    it("returns empty string when undefined is passed", function () {
        var result = theta360_1.Theta360.simple(undefined);
        chai_1.expect(result).to.be.equal("");
    });
});
