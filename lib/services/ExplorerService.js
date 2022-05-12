const FizzbuzzService = require("../services/fizzbuzzService");
const Reader = require("../utils/reader");

class ExplorerService {

    static filterByMission(explorers, mission) {
        if (mission === "node" || mission === "java") {
            const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
            return explorersByMission;
        } else {
            return console.log("la misión no está en la lista");
        }
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        if (mission === "node" || mission === "java") {
            const AmountOfExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);
            return AmountOfExplorersByMission.length;
        } else {
            return console.log("la misión no está en la lista");
        }
        
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        if (mission === "node" || mission === "java") {
            const explorersUsernamesByMission = explorers.filter((explorer) => explorer.mission === mission);
            return explorersUsernamesByMission.map((explorer) => explorer.githubUsername);
        } else {
            return console.log("la misión no está en la lista");
        }
    }

    static getExplorersNamesByMission(mission) {
        if(mission == "node"||mission == "java"){
            const explorers = Reader.readJsonFile("./data/explorers.json");
            const mapExplorers = explorers.filter((explorer) => explorer.mission == mission);
            const namesByMission = mapExplorers.map((explorer) => explorer.name);
            const namesMaped = namesByMission.join("  ,  ")
            const responseBot = `${JSON.stringify(namesMaped)}`
            return responseBot;
        }else{
            return "la misión no está en la lista";
        }
    }

        static validaTelegramBot(inputMsg){
        const msgDataBot = (inputMsg);
        if(!isNaN(msgDataBot)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(msgDataBot);
            const responseBot = `Tu número es: ${msgDataBot}. Trick: ${fizzbuzzTrick}`;
            return responseBot;
        }else if(msgDataBot == "node" || msgDataBot == "java"){
            const explorersMission = ExplorerService.getExplorersNamesByMission(msgDataBot);
            const responseBot = `Explorers en ${msgDataBot}: ${explorersMission}`;
            return responseBot;
        }else{
            return `Ingresa un número para Fizzbuzz o una mision valida (node o java).`;
        }
    }
}

module.exports = ExplorerService;
