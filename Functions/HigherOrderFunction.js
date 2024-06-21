//Higher order Functions..
//Taking functions as argument ,returns a function(or both) called as higher order functions


// const oneword = function(str){
//     return str.replace(/\s+/g, '').toLowerCase();
// }

// const FirstUppercase = function(str){
//     const [firstword,...others] = str.split(' ')
//     return[firstword.toUpperCase(),...others ].join(' ')
// }

// //Higher order function.
// const transform = function(str,func){
// console.log(` Original String is : ${str}`);
// console.log(`Transformed String is : ${func(str)}`);
// console.log(` Transformed by ${func.name}`);
// }


// transform(`JavaScript is Awesome Language`,oneword)
// transform('JavaScript is Awesome Language',FirstUppercase)

//another Example..

const greet = function(str){
    return `Hello Friends from ${str}`
}

const greetMates = function(str){
    return `Hello Friends from ${str}`
}

//Higher orde function

const wish = function(str,fun){
    console.log(`Hi,`,greet(str));
}


wish('All Places',greet)
wish(`School`,greet)
wish(`Work Place`,greetMates)

//higher order functions for breakfast example.
//Buy fries from shop1
//Buy chicken wings from shop2
//meet at spot1 with both items 

const getfood = function(str,shop){
    return `Have ${str} from ${shop}`;
}

const getDrink = function(str,wineshop){
    return `Have ${str} from ${wineshop}`;
}

const dinner = function(item,str,shop,getfood){
    console.log(`Let's Have ${item} now,`,getfood(str,shop));
}

dinner(`food`,`Fries`,`MacDonald's`,getfood)
dinner(`Drink`,'Whisky',`9Clouds`,getDrink)


