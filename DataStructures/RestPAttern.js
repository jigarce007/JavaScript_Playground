//Rest pattern is used to destruct the whole array/objects

const restorante = {
    restName : "La Milano Pizza corner",
    mainMeno : ["Pizza","Pazta","Noodles","Chredded Pizzario"],
    startMeno : ["Mushroom Soup","spagetti","butter biscuits"],
    drinks : ["Salted appy","beer","root beer","red vine"],
    workingHours : { mon : { opens : "9:00 AM",closes : "11:00 PM"},
    tue : { opens : "9:00 AM",closes : "11:00 PM"},
    wed : { opens : "9:00 AM",closes : "11:00 PM"},
    thu : { opens : "9:00 AM",closes : "11:00 PM"},
    fri : { opens : "9:00 AM",closes : "11:00 PM"},
    sat : { opens : "9:00 AM",closes : "12:00 PM"},
    sun : { opens : "9:00 AM",closes : "12:00 PM"},
    }
}

//rest pattern on a simple array
const ar1 = [1,2,3,4,5]

const[a,b, ...others] = ar1
console.log(a,b,others);


//to destructure a merged array
const[mainmen,starter, ...other] = [...restorante.mainMeno,...restorante.startMeno]
console.log(mainmen,starter,other);