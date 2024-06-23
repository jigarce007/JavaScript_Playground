/*
const IndianAirlines  = {
name : 'Indian Airlines',
code : `INA`,
bookings : [],
book(name,flightNo,date){
    console.log(`${name} has booked a flight with ${this.name} with flight number ${this.code}${flightNo} on date ${date}.` );
    this.bookings.push(`name:${name}`,`FlightNo:${this.code}${flightNo}`)
    console.log(this.bookings);
}

}

IndianAirlines.book('Jigar','56','25/10/2024');


const MalaysiaAirlines = {
        name : 'Malaysia Airlines',
        code : `MLA`,
        bookings : []
}
//this will not work as,we need to create a "copy' of book function"
// MalaysiaAirlines.book(`Priyanka`,`98`,`23/10/2024`);

const EuroWings = {
    name : 'European Airlines',
    code : `EUA`,
    bookings : []
}

const Emirates = {
    name : 'Emiarets',
    code : `EMA`,
    bookings : []
}

//call method.. call method is used to apply an method from an object to another object.

const book = IndianAirlines.book;
book.call(MalaysiaAirlines,'Priyanka','99','23/10/2024');
book.call(IndianAirlines,'Jims','99','23/10/2025');
book.call(EuroWings,'Mamta','78','1/10/2024');
book.call(Emirates,'David','34','29/02/2025')

//Apply method(no more used in advance Javascript)
//its not taking parameters..but takes array of parameters
const flightData = ['Jiaan','92','23/10/2024']
book.apply(MalaysiaAirlines,flightData)


//we can avoid using apply method as we have "apread operator"
book.call(IndianAirlines,...flightData);

*/
//Food Order Example

const Macdonald = {
    resturantName : `Macdonald's`,
    maincourse : `MacBurger`,
    sidecourse : `French Fries`,
    drink : `Coke`,
    orders : [],
    order(name,foodtime){
        console.log(`${name} has ordered ${this.maincourse} & ${this.sidecourse} with ${this.drink} 
        from ${this.resturantName} for ${foodtime}`);
        this.orders.push(`name : ${name},food: ${this.maincourse} & ${this.sidecourse},drink : ${this.drink}`);
        console.log(this.orders);
    },
  
}

//Macdonald.order(`Jigar`,`Dinner`)


const KFC = {
    resturantName : `KFC's`,
    maincourse : `Chicken Nugets`,
    sidecourse : `Chicken Popcorns`,
    drink : `Pepsi`,
    orders : []
}

const BurgerKing = {
    resturantName : `BurgerKing`,
    maincourse : `Chicken Wings`,
    sidecourse : `Potato weges`,
    drink : `Frappe`,
    orders : [] 
}

const order = Macdonald.order;

// order.call(KFC,`Priyanka`,`Dinner`)
// order.call(BurgerKing,`Gopi`,`Lunch`)
// order.call(KFC,`Palak`,`Lunch`)


//Bind method


const letsOrderMacD = order.bind(Macdonald)
letsOrderMacD(`Padro`,`Dinner`)

const letsOrderKFC = order.bind(KFC)
letsOrderKFC(`Annie`,`Lunch`)

const letsOrderBurgerKing = order.bind(BurgerKing)
letsOrderBurgerKing(`Sara`,`BreakFast`)


//partial aplication
function letOrderFood(foodTime,restorante){
    console.log(`I have ordered ${restorante.maincourse} from ${restorante.resturantName} for ${foodTime}`);
}

const letEat = letOrderFood.bind(null,`Dinner`)
letEat(KFC)
