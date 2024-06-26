console.log(`==============challenge for array and array operations===========`)
/*
PROBLEM STATEMENT
Steven wants you to improve his tip calculator, using the same rules as before — 
Rule - tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

1) Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to).
Use the function type you like the most. Test the function using a bill value of 100.

2) And now let's use arrays! So, create an array called bills containing the test data below.

3) Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

*/
/* Write your code below. Good luck! 🙂 */


const bill = 100;
const bills = [125,555,44];


/* Write your code below. Good luck! 🙂 */
let tip;
let total;
function calcTip(bill){
    tip = (bill>=50 && bill<=300) ?    bill *15/100 :  bill *20/100
    return tip
}


const billTip = calcTip(100)
const tips = [calcTip(125),calcTip(555),calcTip(44)]
const totals = [(125+calcTip(125)),(555+calcTip(555)),(44+calcTip(44))]

console.log(`========TIP FROM FUNCTION IS ${billTip}`)
console.log(`========total from all bills is ${totals}`)