//Array decalrations
const myIntro = ['Jigar',32,`Ahmedabad`,`malaysia`,11000]
const myWifeIntro = ["Priyanka",26,'Ahmedabad',`malaysia`,10000]
const typOf =[];

//looping through arrays

for (let i = 0; i < myIntro.length; i++) {
    const element = myIntro[i];
    console.log(element)
    typOf.push(typeof(element))

}
//Array of types of array myIntro
console.log(typOf);



//Loops with "Continue" ..continue will loop only the condition satisfying  items..!
console.log(`==========For loop with "Continue"=======`)
for (let index = 0; index < myIntro.length; index++) {
    const element = myIntro[index];
    if(typeof(element) !== "string") continue; // continue will skip the other elements then "string"
    console.log(element)
    
}




//Loop with "break"
//'break' will break the whole loop once condition doesn't meet!
console.log(`==========For loop with "Break"=======`)
for (let index = 0; index < myWifeIntro.length; index++) {
    const element = myWifeIntro[index];
    //console.log(typeof(element) )
    if(typeof(myWifeIntro[index]) === "number") break;
    console.log(element)
    
}

//Loop under loop

//ex.. we have 4 exercise nd want to repeat each exercise 5 times...

for (let exercise = 1; exercise <5; exercise++) {
    console.log(`=========This is Exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
       console.log(`=========Exercise ${exercise} doing ${rep} time`)
    }
}

console.log(myWifeIntro)