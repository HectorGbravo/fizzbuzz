class FizzbuzzService {
    
    static applyValidationInExplorer(explorer) {

        if(explorer.score % 3 === 0 && explorer.score % 5 === 0){
                return explorer.trick = "FIZZBUZZ"
            }else if(explorer.score % 3 === 0) {
                return explorer.trick = "FIZZ"
            }else if(explorer.score % 5 === 0 && explorer.score % 5 === 0) {
                return explorer.trick = "BUZZ"
            }else {
                return explorer.score
        }
    }
}

module.exports = FizzbuzzService