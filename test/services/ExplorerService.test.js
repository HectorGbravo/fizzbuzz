const Explorers = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const { expect } = require("expect");

describe("Unit test for ExplorerService class", () => {
    
    test("1. ExplorerService: Comprobando método ExplorerService.filterByMission ", () => {
        const path = "./test/data/explorersDummy.json";
        const explorer = Explorers.readJsonFile(path);
        const listaExplorers = ExplorerService.filterByMission(explorer, "node");
        expect(listaExplorers).not.toBeUndefined();
        expect(listaExplorers.length).toBe(10);
       
    });
    test("2. ExplorerService: Comprobando el método ExplorerService.getAmountOfExplorersByMission", () => {
        const path = "./test/data/explorersDummy.json";
        const explorer = Explorers.readJsonFile(path);
        const cantidadExplorers = ExplorerService.getAmountOfExplorersByMission(explorer, "node");
        expect(cantidadExplorers).toBe(10);
    });
    test("3. ExplorerService: Comprobando el método ExplorerService.getExplorersUsernamesByMission", () => {
        const path = "./test/data/explorersDummy.json";
        const explorer = Explorers.readJsonFile(path);
        const usernameExplorers = ExplorerService.getExplorersUsernamesByMission(explorer, "node");
        expect(usernameExplorers).not.toBeUndefined();
        
    });

});