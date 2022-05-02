const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const databaseExplorers = "./../data/explorers.json";

class ExplorerController {

    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(databaseExplorers);
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile(databaseExplorers);
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile(databaseExplorers);
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
   }
}

module.exports = ExplorerController