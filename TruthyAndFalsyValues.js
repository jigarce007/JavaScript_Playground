console.log('===================THUTHY & FALSY VALUES====================')
/* 
In JS 5 values are considered as "Falsy values"
0,Null,NAN,UNDEFINED,''
if you provide this in JS,it will take as "false"
*/
//All below values will be false.. as they are falsy values
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(null))   



//other than the above values are considered as truthy values when we convert it to boolean..example
console.log(Boolean(1)) // will be true
console.log(Boolean('Null')) //'Null' is a strig here


// we can use these directly in IF else too..
const money = 0
if (money) {
    console.log('Spend some money on friends!')
} else {
    console.log('You should start a job!')
}
