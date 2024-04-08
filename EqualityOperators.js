//=========== Equality Operators ================//
/* There are two types of equlity operators in JS 1. Strict operator and loo=se operator.
 "===" is strict -- The value must be EXACTLY same(in Type also e.g String,Int)
 "==" is loose operator -- The value should be same wehter it's Int or String\
 */

console.log(`==================EQULITY OPERATORS===============`)
const ApplicantAge = '18'  // Note here..its a string value..not the number.

if(ApplicantAge === 18){
    console.log('He will get the Driving liecense.')
}else{
    console.log(`He won't get the liecense`)
}


//Now will check loose operator "=="
if(ApplicantAge == 18){
    console.log('He will get the Driving liecense.')
}else{
    console.log(`He won't get the liecense`)
}