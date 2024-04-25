/*
STRICT MODE IS USED TO THROW THE ERROR AND DEBUG PURPOSE,WITHOUT STRICT MODE WE CANT FIND ERROR FRO COSNOLE.
*/
console.log(`===========STRICT MODE================`)
'use strict';

const birthyears = 32
console.log(`Jigar is ${birthyears} old!`)

//If we have some typing error in any variable or function then strict mode will throw error and we can fix it..eg below

console.log(`Jigar is ${birthyears} old!`)
//In above log we will get error Uncaught ReferenceError: bithyears is not defined
//because we have made a typing error in variable "birthyears".if we remove the strict mode then we wont get the error

let hasDrivingLicense = false
const testPassed = true

if(testPassed) hasDrivingLicense = true
if(hasDrivigLicense){
    console.log(`You can drive a car!`)
}
//NOTE :  NOWADAYS WE NO MORE NEED TO DECLARE STRICT MODE EXPLICITLY AS THIS MODE IS BY DEFAULT IN LATEST JAVASCRIPT VERSIONS.
