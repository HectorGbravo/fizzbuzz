const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");


const explorers = Reader.readJsonFile("./data/explorers.json");

console.log(explorers);

listaExplorers = ExplorerService.filterByMission(explorers, "node");
console.log("Explorers filtrados por misión node:");
console.log(listaExplorers); 

amountExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
console.log(`Explorers en Node: ${amountExplorers}`);

userNameExplorers = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(`Usuarios en mission node: ${userNameExplorers}`);

const explorer1 = {name: "Explorer1", score: 1};
firstValidation = FizzbuzzService.applyValidationInExplorer(explorer1); 
console.log(firstValidation);

const explorer3 = {name: "Explorer3", score: 3};
secondValidation = FizzbuzzService.applyValidationInExplorer(explorer3); 
console.log(secondValidation);

const explorer5 = {name: "Explorer5", score: 5};
thirdValidation = FizzbuzzService.applyValidationInExplorer(explorer5); 
console.log(thirdValidation);

const explorer15 = {name: "Explorer15", score: 15};
fourValidation = FizzbuzzService.applyValidationInExplorer(explorer15); 
console.log(fourValidation);


