//sets are used to save the unique items

const languages = new Set(['English','Gujarati','Hindi','Arabic','English','Arabic','Hebrew','Chinese','Malay','Gujarati','Hindi']);
for (const iterator of languages) {
    console.log(iterator);
}

//to add elements to set
languages.add('Tamil')
languages.add('Sanskrit')
console.log(languages);


//to delete element
languages.delete('Tamil')
console.log(languages);

//to check element is in set or not
const hasHindi = languages.has('Hindi')
console.log(hasHindi)

//convert set to array
const cl = [...languages]
console.log(`========set is now array===`,cl)


//iterating a set..
console.log("========iteration of set===");
for (const iterator of languages) {
    console.log(iterator);
}

languages.clear();

//

const cities = new Map()
cities.set(1,'Ahmedabab')
cities.set(2,'Delhi')
cities.set(3,'Hydrabad')
cities.set(5,'Kolkata')
cities.set(4,'Mumbai')
cities.set(6,'Goa')

console.log(cities)

//to get values
console.log(cities.get(1))
console.log(cities.get(5))
console.log(cities.get(6))

//to delete the value
cities.delete(6)
cities.delete(3)
cities.delete(8)
console.log(cities);

//Looping maps
for (const [key,val] of cities) {
    console.log(key)
    console.log(val)
}


//tp delete the map
cities.clear();

//Assignements
const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']])
console.log(bookMap);


bookMap.set('pages',646)

console.log(bookMap.get('title'));
console.log(bookMap.get('author'));

//Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
console.log(`Answer : ` ,bookMap.has('author') ? 'The author of the book is known' : 'The author of the book is Unknown');
