console.log(`=============ARRAY OERATIONS=========`)


//Array decalrations
const myIntro = ['Jigar',32,`Ahmedabad`,`India`,11000]
const myWifeIntro = [`Priyanka`,26,'Ahmedabad',`malaysia`,10000]

//Array operations

myIntro.push('Maybank') // Push is used to add the element into array
myWifeIntro.push(`NCH`)

console.log(`======Wife Info===== 
${myWifeIntro}`)
console.log(`======My Info===== 
${myIntro}`)

myIntro.pop()                          // pop is used to delete the last element
console.log(`======My Info===== POP 
${myIntro}`)
myIntro.unshift('software engineer') // unshift is used to add an element at the fisrt position
console.log(`======My Info===== UNSHIFT
${myIntro}`)
myIntro.shift();                     // shift is used to remove the first element
console.log(`======My Info===== SHIFT
${myIntro}`)


/*
NOTE TO REMEMBER
=================
PUSH = TO ADD AN ELEMENT AT 'LAST POSITION'
POP = TO REMOVE AN ELEMENT AT 'LAST POSITION'

SHIFT = TO REMOVE AN ELEMENT FROM THE 'FIRST POSTION'
UNSHIFT = TO ADD AN ELEMENT TO THE 'FIRST POSITION'

*/

const hasvalue = myIntro.includes('Jigar')  // 'includes' is used to check wether the element is in the array or not!
if(hasvalue){
    console.log(`It contains your name! yay`)
}

const indexvalue = myIntro.indexOf('Ahmedabad') // 'indexOf' is used to get the index of the element contains passed value.
console.log(`your city is at ${indexvalue} position in Array!`)