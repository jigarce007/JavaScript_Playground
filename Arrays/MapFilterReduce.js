//map function is used to create a cipy of an arrayit wont alter the original array
//map function takes a function as argumetn and returns an array.

const transacts = [200,300,400,-123,321,3209,-210,-434,990]

const transcopy = transacts.map(trans => 
trans*2
);

console.log(` Transaction copy : ${transcopy}`);
console.log(` original transactions : ${transacts}`);



//Filter Method
const Withdraw = [];
const depost = []; 
const filteredTrans = transacts.filter(function(amt){
        if(amt>0)
        return depost.push(amt)
        else
        return Withdraw.push(Math.abs(amt))
    })
console.log(`Deposit Amounts : ${depost}`);
console.log(`Withdraw Amounts : ${Withdraw}`);


//alos can use like below
const wdTrans = transacts.filter(amt => Math.abs(amt<0))
const depoTrans = transacts.filter(amt => amt>0)
console.log(`WD : ${wdTrans}`);
console.log(`DP : ${depoTrans}`);


//reduce method
//reduce method is used to make an array to a value,e.g adding al elements of
//an array to a total amount.

const balance = transacts.reduce((acc, amt) => acc + amt, 0);

console.log(balance);

const totalDepostis = depoTrans.reduce((acc,depo) => acc+depo,0);
console.log(`Total Deposits : ${totalDepostis}`);
const totalwithdrawals = wdTrans.reduce((acc,wdamt) => acc+Math.abs(wdamt),0)
console.log(`Total Withdrawals : ${totalwithdrawals}`);

//To find out the maximum value from an array

//find out max deposit value from all deposits

const maxDeposit = depoTrans.reduce((acc,depo) => 
{if(acc>depo)
return acc
else
return depo}
,depoTrans[0])

console.log(`Maximum Deposit Amount is : ${maxDeposit}`);


//find out maximum value from all withdrwasls

const maxWidwr = wdTrans.reduce((acc,amt) => {
        if(acc > Math.abs(amt))
            return acc
        else
            return Math.abs(amt)
},wdTrans[0])

console.log(`Maximum Withdrawal Amount is : ${maxWidwr}`);