/**
 * @api {get} localhost:3000/ 1. FizzBuzz API welcome!
 * @apiName Fizzbuzz API
 * @apiGroup ExplorerController
 * @apiVersion 1.0.0
 * @apiSuccessExample Sucess-Response:
 *     localhost:3000/
 * 
 *     HTTP/1.1 200 OK
 *      FizzBuzz API welcome!
 */

 /**
 * @api {get} localhost:3000/v1/explorers/:mission 2. Endpoint: getExplorersByMission(mission)
 * @apiName getExplorersByMission(mission)
 * @apiGroup ExplorerController
 * @apiVersion 1.0.0
 * @apiParam {String} mission Tipo de misión node o java
 * 
 * @apiSuccess {String} name Nombre del explorer
 * @apiSuccess {String} githubUsername Nombre de usuario del explorer
 * @apiSuccess {Number} score Número de score del explorer
 * @apiSuccess {String} mission Tipo de misión: node o java
 * @apiSuccess {Objects[]} stacks Stacks con los que cuenta el explorer
 * @apiSuccessExample Sucess-Response:
 *     localhost:3000/v1/explorers/node
 * 
 *     HTTP/1.1 200 OK
 *      [
*  {
*    "name": "Woopa1",
*    "githubUsername": "ajolonauta1",
*    "score": 1,
*    "mission": "node",
*    "stacks": [
*      "javascript",
*      "reasonML",
*      "elm"
*    ]
*  },
*  {
*    "name": "Woopa2",
*    "githubUsername": "ajolonauta2",
*    "score": 2,
*    "mission": "node",
*    "stacks": [
*      "javascript",
*      "groovy",
*      "elm"
*    ]
*  },
*  {
*    "name": "Woopa3",
*    "githubUsername": "ajolonauta3",
*    "score": 3,
*    "mission": "node",
*    "stacks": [
*      "elixir",
*      "groovy",
*      "reasonML"
*    ]
*  },
*/

 /**
 * @api {get} /v1/explorers/amount/:mission 3. Endpoint: getExplorersAmountByMission(mission)
 * @apiName getExplorersAmountByMission(mission)
 * @apiGroup ExplorerController
 * @apiVersion 1.0.0 
 * @apiParam {String} mission Tipo de misión node o java
 * 
 * @apiSuccess {String} mission Tipo de misión: node o java
 * @apiSuccess {Number} quantity Número de explorers por tipo de misión: node o java
 
 * @apiSuccessExample Sucess-Response:
 *      localhost:3000/v1/explorers/amount/node
 * 
 *      HTTP/1.1 200 OK
 * {
 * "mission": "node",
 * "quantity": 10
 * }
 * 
 */
/**
 * @api {get} /v1/explorers/usernames/:mission 4. Endpoint: getExplorersUsernamesByMission(mission)
 * @apiName getExplorersUsernamesByMission(mission)
 * @apiGroup ExplorerController
 * @apiVersion 1.0.0 
 * @apiParam {String} mission Tipo de misión: node o java
 * 
 * @apiSuccess {String} mission Tipo de misión: node o java
 * @apiSuccess {Objects[]} explorers Nombre de usuario de los explorers por misión
 * @apiSuccessExample Sucess-Response:
 *     localhost:3000/v1/explorers/usernames/java
 * 
 *     HTTP/1.1 200 OK
 * {
 * "mission": "java",
 * "explorers": [
 *   "ajolonauta6",
 *   "ajolonauta7",
 *   "ajolonauta8",
 *   "ajolonauta9",
 *   "ajolonauta10"
 *  ]
 * }
 */
/**
 * @api {get} /v1/fizzbuzz/:score 5. Endpoint: getValidationInNumber(score)
 * @apiName getValidationInNumber(score)
 * @apiGroup ExplorerController
 * @apiVersion 1.0.0 
 * @apiParam {Number} score Valor que determina el truco
 * 
 * @apiSuccess {Number} score Valor que determina el truco
 * @apiSuccess {Number} trick truco si score: 3%=0:"FIZZ",5%=0:"BUZZ",3%=0 && 5%=0:"FIZBUZZ", other=score
 * @apiSuccessExample Sucess-Response:
 *     localhost:3000/v1/explorers/fizzbuzz/1
 * 
 *     HTTP/1.1 200 OK
 *{
 * "score": "1",
 * "trick": "1"
 *}
 * 
 *     localhost:3000/v1/explorers/fizzbuzz/3
 * 
 *     HTTP/1.1 200 OK
 *{
 * "score": "3",
 * "trick": "FIZZ"
 *}
  *     localhost:3000/v1/explorers/fizzbuzz/5
 * 
 *     HTTP/1.1 200 OK
 *{
 * "score": "5",
 * "trick": "BUZZ"
 *}
  *     localhost:3000/v1/explorers/fizzbuzz/15
 * 
 *     HTTP/1.1 200 OK
 *{
 * "score": "15",
 * "trick": "FIZZBUZZ"
 *}
*/
