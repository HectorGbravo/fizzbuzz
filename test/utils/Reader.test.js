const Explorers = require("./../../lib/utils/Reader");

describe("Unit test for Explorers class", () => {
    test("1. Read Json File", () => {
        const path = "./../fizzbuzz/data/explorers.json";
        const explorer = Explorers.readJsonFile(path);
        expect(explorer).not.toBeUndefined();
        
    });
    test("2. Import correct data", () => {
        const path = "./../fizzbuzz/data/explorers_1.json";
        const explorer = Explorers.readJsonFile(path);
        
        expect(explorer[0].name).toBe("Woopa1");
        expect(explorer[0].githubUsername).toBe("ajolonauta1");
        expect(explorer[0].mission).toBe("node");
        expect(explorer[0].score).toBe(1);
        expect(explorer[0].stacks[0]).toBe("javascript");
        expect(explorer[0].stacks[1]).toBe("reasonML");
        expect(explorer[0].stacks[2]).toBe("elm");
                
    });
});