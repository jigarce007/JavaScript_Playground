//spread operator.
//sprad operator is used to expand the array
const ary = [5,6,7,8]

const newAry = [1,2, ...ary]
console.log(`${newAry}`);

//case 1 - shalow copy of an array
const mainMenu = ['Pizza','pasta','pasta lazania']
const starter = ['garlic bread','salted fish','masala kaju','giger soup']
const restaurant = [starter,mainMenu]

//make a shalow copy
const shalowCopyAry = ['chinese manchurian','noodles', ...restaurant]
console.log(`============= shalow copy ======== > ${restaurant}`);


//merge two arrays,Join two arrays

const mergedArray = [...restaurant.starter,...mainMenu];
console.log(`=========mergerd array======= > ${mergedArray}`); 


