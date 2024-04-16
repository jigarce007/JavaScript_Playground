/* STRING OPERATIONS */
//STRING OPERATIONS LIKE STRING CONCATING, templates `` and multiline strings(paragraph).

console.log("======================STRING OPERATIONS========================");
const naam = "Jigar";
const surname = "Makwana";
const cityOfResidence = "Kuala Lumpur";
const job = "software engineer";
const company = "Maybank";
const age = 32;

const wifeName = "Priyanka";

//example of concating two string ..name and surname
const fullname = naam + surname;
console.log(fullname);
console.log(naam + " " + surname);

//example of using string templets ` `
console.log(
  `My name is ${naam} ${surname}, I am working as ${job} at ${company} and I am living in wonderful city of ${cityOfResidence}`
);

//to write the multiple line(paragraph)..use string templtes like below
console.log(`My name is ${naam} ${surname}
I am working as ${job} at ${company}
I am living in a wondeful city of ${cityOfResidence} with my wife ${wifeName}.
My Age is ${age} `);
