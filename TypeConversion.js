console.log(`======================TYPE CONVERSION & TYPE COERSION===================`)
/* LESSION FOR CONVERTING THE TYPES OF VARIABLES AND VALUES eg. from string to number and so on */
/* Javascript implicitly convert the Types of values in some cases except "=" as it is used as a string concating symbol. */

//Type conversion
let birthYr = '1991'
console.log(birthYr + 18)
console.log(Number(birthYr)+18)  //here to add the value, we need to manually convert string to Int using "NUMBER"

let  fonNumber = 6023344545 
console.log(String(fonNumber)) // to convert a number to string ,use "String"

//Type coersion
console.log('I am ' + 32 +'years old') // this is example of type coersion .. automatically type conversion
console.log('30' + '20' - 10) // here "30 considered as string and "20" will be converted to int to minus 10.





