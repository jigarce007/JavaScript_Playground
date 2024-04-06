console.log('======================BASIC OPERATORS========================')
//Lesson about the operators
//THREE TYPES MATH OPERATORS,ASSIGNMENT OPERATORS,COMPARISON OPERATORS

//Math operators etc +,-,*,/ addition,subtraction,multiplication and division etc,,,modulo that kind of opeators
const num1 = 10
const num2 = 20

let sum = num1 + num2 
console.log(sum)

let minus = num2-num1
console.log(minus)

let multipy = num1 * num2
console.log(multipy)

let division = num2/num1
console.log(division)


//Assignment operators  ... tonassing the values..!
sum = sum+1
sum++
console.log(sum)

sum = sum -1
sum--

//comparison operators .. <,>,<=,>=
console.log(num2>num1)
if(num1>num2)
console.log(' number 1 is greter')
else
console.log('number 2 is greater')



// CODING CHALLENGE
/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

let massMark,massJhon,heightMark,heightjhon,BMIMark,BMIJhon;
let markHigherBMI

massJhon = 78
massMark = 92
heightMark = 1.69
heightjhon = 1.76

BMIJhon = massJhon/(heightjhon*heightjhon)
BMIMark = massMark/(heightMark*heightMark)

markHigherBMI = BMIMark>BMIJhon

console.log(markHigherBMI)

//CODING CHALLENGE TWO
/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

if(markHigherBMI)
console.log("Mark's BMI",BMIMark,"is higher than John's",BMIJhon,"!")





