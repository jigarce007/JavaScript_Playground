const myBio = {
  fname: "Jigar",
  lname: "Makwana",
  work: "Software Engineer",
  office: "Menara Maybank",
  friends: ["Joel", "John", "Rishi"],
};

console.log(
  `${myBio.fname} has ${myBio.friends.length} friends, and his best friend is ${myBio.friends[0]}`
);

//OBJECT WITH METHODS

const myInfo = {
  fname: "Jigar",
  lname: "Makwana",
  work: "Software Engineer",
  office: "Menara Maybank",
  friends: ["Joel", "John", "Rishi"],
  hasDrivingLicense: true,
  calculateAge: function () {
    console.log(`Method from object!`);
  },
  getSummary: function () {
    console.log(
      `${this.fname} is a ${this.work} at ${this.office} and he has ${
        this.hasDrivingLicense ? "a" : "no"
      } driver License`
    );
  },
};

myInfo.calculateAge();

myInfo.getSummary();

const byear = prompt(`What is your birthyear`);
const calcAges = byear =>  2024 - byear;

console.log(calcAges(byear))
