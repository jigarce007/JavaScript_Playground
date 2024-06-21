//Functions with default params..

const isQualify = function drivingEligible(age = 18,nationality = 'Indian'){
    console.log(`My age is ${age} and I am ${nationality}`)
}
console.log(isQualify(21,'American'));

//Functions accepting another functions as params

const drivingTest = function(writtenExam,practicalTest){
    let isPassed = false;
    if(writtenExam && practicalTest){
        isPassed = `You have cleared Driving Test 🚗`;
       
    }
    else if(!writtenExam && practicalTest){
        isPassed = `You are failed in written Test 📝`;
       
    }
    else if(writtenExam && !practicalTest){
        isPassed = `You are failed in practical Test 🚘`;
       
    }else{
        isPassed = `You are failed in both exams 😭`
    }
    return isPassed
}
const writtenExam = function(isPass){
    const isClear = isPass
    return isClear
}

const practicalTest = function(res){
    const isClear = res
    return isClear
}

console.log(drivingTest((writtenExam(true)),practicalTest(false)));


//function which returns a function
