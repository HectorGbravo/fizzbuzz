const Explorers = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Unit test for ExplorerService class", () => {
    
    test("1. ExplorerService: Filtrado de la lista de explorers por mission node", () => {
        const path = "./test/data/explorersDummy.json";
        const explorer = Explorers.readJsonFile(path);
        const listaExplorers = ExplorerService.filterByMission(explorer, "node");
        expect(listaExplorers).not.toBeUndefined();
       
    });
    test("2. ExplorerService: Filtra la cantidad de explorers por mission node", () => {
        const path = "./test/data/explorersDummy.json";
        const explorer = Explorers.readJsonFile(path);
        const cantidadExplorers = ExplorerService.getAmountOfExplorersByMission(explorer, "node");
        expect(cantidadExplorers).toBe(10);
    });
    test("3. ExplorerService: filtra los nombres de usuario por mission node", () => {
        const path = "./test/data/explorersDummy.json";
        const explorer = Explorers.readJsonFile(path);
        const usernameExplorers = ExplorerService.getExplorersUsernamesByMission(explorer, "node");
        expect(usernameExplorers).not.toBeUndefined();
        
    });

});