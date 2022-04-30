const Explorers = require("./../lib/utils/Reader")


describe("Unit test for Explorers class", () => {
    
    test("1. Read Json File", () => {
        const path = './test/data/explorersDummy.json'
        const explorer = Explorers.readJsonFile(path)
        expect(explorer).not.toBeUndefined()
        
    });
        
})