const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit test for FizzbuzzService class", () => {
    test("1. Fizzbuzz test with {name: Explorer1, score: 1, trick: 1} ", () => {
        const explorer = {name: "Explorer1", score: 1};
        validation = FizzbuzzService.applyValidationInExplorer(explorer); 
        expect(validation).toBe(1);
    });
    test("2. Fizzbuzz test with {name: Explorer3, score: 3, trick: FIZZ} ", () => {
        const explorer = {name: "Explorer3", score: 3};
        validation = FizzbuzzService.applyValidationInExplorer(explorer); 
        expect(validation).toBe("FIZZ");
    });
    test("3. Fizzbuzz test with {name: Explorer5, score: 5, trick: BUZZ} ", () => {
        const explorer = {name: "Explorer5", score: 5};
        validation = FizzbuzzService.applyValidationInExplorer(explorer); 
        expect(validation).toBe("BUZZ");
    });
    test("4. Fizzbuzz test with {name: Explorer15, score: 15, trick: FIZZBUZZ} ", () => {
        const explorer = {name: "Explorer15", score: 15};
        validation = FizzbuzzService.applyValidationInExplorer(explorer); 
        expect(validation).toBe("FIZZBUZZ");
    });
});