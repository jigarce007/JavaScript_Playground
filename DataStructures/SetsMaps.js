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

//maps iterations

const bookss = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
          goodreads: {
            rating: 4.41,
            ratingsCount: 1733,
            reviewsCount: 63,
            fiveStarRatingCount: 976,
            oneStarRatingCount: 13
          }
        },
        highlighted: true
      },
      {
        title: 'Structure and Interpretation of Computer Programs',
        author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
          goodreads: {
            rating: 4.36,
            ratingsCount: 14,
            reviewsCount: 3,
            fiveStarRatingCount: 8,
            oneStarRatingCount: 0
          }
        },
        highlighted: true
      },
      {
        title: 'Computer Systems: A Programmer\'s Perspective',
        author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
          goodreads: {
            rating: 4.44,
            ratingsCount: 1010,
            reviewsCount: 57,
            fiveStarRatingCount: 638,
            oneStarRatingCount: 16
          }
        },
        highlighted: true
      },
      {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
          goodreads: {
            rating: 3.9,
            ratingsCount: 2131,
            reviewsCount: 114,
            fiveStarRatingCount: 728,
            oneStarRatingCount: 65
          }
        }
      },
      {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
          goodreads: {
            rating: 4.35,
            ratingsCount: 370,
            reviewsCount: 18,
            fiveStarRatingCount: 211,
            oneStarRatingCount: 6
          }
        },
        highlighted: true
      },
      {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
          goodreads: {
            rating: 4.11,
            ratingsCount: 40119,
            reviewsCount: 1351,
            fiveStarRatingCount: 18033,
            oneStarRatingCount: 1090
          }
        }
      },
      {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
          goodreads: {
            rating: 4.7,
            ratingsCount: 253,
            reviewsCount: 23,
            fiveStarRatingCount: 193,
            oneStarRatingCount: 0
          }
        }
      },
      {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
          goodreads: {
            rating: 4.19,
            ratingsCount: 144584,
            reviewsCount: 11598,
            fiveStarRatingCount: 63405,
            oneStarRatingCount: 1808
          }
        },
        highlighted: true
      }
    ];

//case 1 : Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
const firstBookMap = new Map(Object.entries(bookss[0]))
console.log(`====First book to map`,firstBookMap);

//case 2: Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
for (const [key,val] of firstBookMap) {
    if(typeof val === "number")
    console.log(key);
}
