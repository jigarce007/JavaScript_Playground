console.log(`===============FUNCTIONS===================`)
//JAVASCRIPT HAVE 3 TYPES OF FUNCTIONS  
// FUNCTION DECLARATION,FUNCTION EXPRESSIONS & ARROW FUNCTIONS

// ========== FUNCTION DECLARATIONS
function juicer(mango,orange){
    const juice = (mango + orange)
    return juice;
}

const glass = juicer(3,2)
console.log(` we got the ${glass} juice from the machine! yay`)

// ========= FUNCTION EXPRESSIONS -- FUNCTIONS WITHOUT NAME

const fruitpieces = function(fruits){ 
    fruits = glass
    return fruits * 4;
}

const cuts = fruitpieces(glass)  //NOTE :  YOU MUST ASSIGN THE FUNCTION VARIABLE TO ANOTHER VARIABLE IN ORDER TO USE IT .AS THAT IS NOT A SIMPLE VARIABLE,ITS A FUNCTION!!!

console.log(`Fruitcutter cut fruit in ${cuts}`) 

//=========ARROW FUNCTIONS
 const smoothie = mango => mango*2 
 console.log( `we got ${smoothie(2)} glass of smoothies yay!`)
 

 



