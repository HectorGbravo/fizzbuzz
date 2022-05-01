const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit test for ExplorerController class", () => {
    
    test("1. ExplorerController: Comprobando método getExplorersByMission", () => {
        
        const listaExplorers = ExplorerController.getExplorersByMission("node"); 
        expect(listaExplorers).not.toBeUndefined();
        expect(listaExplorers.length).toBe(10);
       
    });
    test("2. ExplorerController: Comprobando método getExplorersUsernamesByMission", () => {
        const listaExplorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(listaExplorers).not.toBeUndefined();
        expect(listaExplorers[0]).toBe("ajolonauta1");
        expect(listaExplorers[1]).toBe("ajolonauta2");
    })
    test("3. ExplorerController: Comprobando método getExplorersAmountByMission", () => {
        const listaExplorers = ExplorerController.getExplorersAmountByMission("node");
        expect(listaExplorers).toBe(10);
    })
        
})