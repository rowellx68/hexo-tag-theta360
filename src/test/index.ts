import { Theta360 } from "../lib/theta360";
import { expect } from "chai";

const EXPECTED = '<iframe class="hexo-tag-theta360" src="https://theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho?view=embed" frameBorder="0"></iframe>';

describe("Theta 360 simple tag", () => {
    it("generates the correct HTML when provided with full url", () => {
        const testUrl = "https://theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho";
        const result = Theta360.simple(testUrl);

        expect(result).to.be.equal(EXPECTED);
    });

    it("generates the correct HTML when provided with complete url", function () {
        const testUrl = "https://www.theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho";
        const result = Theta360.simple(testUrl);

        expect(result).to.be.equal(EXPECTED);
    });

    it("generates the correct HTML when provided with image code", function () {
        const imageCode = "fHmW9N6LuKPPp6pqmnPt1vpho";
        const result = Theta360.simple(imageCode);

        expect(result).to.be.equal(EXPECTED);
    });

    it("returns empty string when null is passed", function () {
        const result = Theta360.simple(null);

        expect(result).to.be.equal("");
    });

    it("returns empty string when undefined is passed", function () {
        const result = Theta360.simple(undefined);

        expect(result).to.be.equal("");
    });
});
