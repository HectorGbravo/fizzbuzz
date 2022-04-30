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
}

module.exports = ExplorerService;
