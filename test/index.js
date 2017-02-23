"use strict";

var theta360 = require("../lib/theta360");
var expect = require("chai").expect;

var EXPECTED = '<iframe class="hexo-tag-theta360" src="https://theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho?view=embed" frameBorder="0"></iframe>';

describe("Theta 360 simple tag", function () {

    it("generates the correct HTML when provided with full url", function () {
        var testUrl = "https://theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho";
        var result = theta360.Theta360.simple(testUrl);

        expect(result).to.be.equal(EXPECTED);
    });

    it("generates the correct HTML when provided with complete url", function () {
        var testUrl = "https://www.theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho";
        var result = theta360.Theta360.simple(testUrl);

        expect(result).to.be.equal(EXPECTED);
    });

    it("generates the correct HTML when provided with image code", function () {
        var imageCode = "fHmW9N6LuKPPp6pqmnPt1vpho";
        var result = theta360.Theta360.simple(imageCode);

        expect(result).to.be.equal(EXPECTED);
    });

    it("returns empty string when no string is passed", function () {
        var result = theta360.Theta360.simple();

        expect(result).to.be.equal("");
    });
});