//Funtions returnning Functions

/*
const grit = function(greetings){
    return function(name){
        console.log(`${greetings} ${name}`);
    }
}

grit(`Hello`)(`Jigar`)
const gritHey = grit('Hey')
gritHey('Jims')
*/
//using the Arrow functions

const grit = (greetings) => (name)=>
    console.log(`${greetings} ${name}`);

    grit('Hey')('Jims')