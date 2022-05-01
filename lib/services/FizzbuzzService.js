class FizzbuzzService {
    
    static applyValidationInExplorer(explorer) {

        if(explorer.score % 3 === 0 && explorer.score % 5 === 0){
            return explorer.trick = "FIZZBUZZ";
        }else if(explorer.score % 3 === 0) {
            return explorer.trick = "FIZZ";
        }else if(explorer.score % 5 === 0 && explorer.score % 5 === 0) {
            return explorer.trick = "BUZZ";
        }else {
            return explorer.score;
        }
    }
    static applyValidationInNumber(number){
        let valor='';
        if(  number %5 === 0 && number%3 === 0 ){
            valor = "FIZZBUZZ";
        } else if( number%5 === 0  ){
        valor = "BUZZ";

        }else if( number%3 === 0  ){
            valor = "FIZZ";
        } else {
            valor =number;
        }
        return valor; 
    }

}
module.exports = FizzbuzzService;