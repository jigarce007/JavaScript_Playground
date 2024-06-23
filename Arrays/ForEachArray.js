const amounts = [110,-22,1000,-350,960,450,430,110,-120,430,500,500,960,-430]

//For Of Array Looping
console.log(`=========FOR OF LOOP=============`);
for (const [i,amount] of amounts.entries()) {
    if(amount>0){
        console.log(`💵 Deposit ${i}:  ${Math.abs(amount)} 🤑`);
    }else{
        console.log(`💸 Withdraw ${i}:  ${Math.abs(amount)} 🤒`);
    }
}



//for each Array Looping
console.log(`============FOR EACH LOOP===============`);
amounts.forEach((amount,i,array) => {
    
        if(amount>0){

            console.log(`💵 Deposit at ${i}: ${Math.abs(amount)} 🤑`);
        }else{
            console.log(`💸 Withdraw at ${i}: ${Math.abs(amount)} 🤒`);
    }
});

//For each with map ans set

const currencies = new Map ([
    [`USD`,`United States of America`],
    [`INR`,`Indian Rupees`],
    [`MYR`,`Malaysian Ringgits`],
    [`EUR`,"Europe"]
])

currencies.forEach((value,key,map) => {
    console.log(`Vvalue for key ${key} : ${value}`);
});

const amts = new Set(amounts)
amts.forEach((amt,_,set) => {
    console.log(` Value : ${amt}`);
});