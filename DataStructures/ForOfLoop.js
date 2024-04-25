//For of loop : is used to iterate the array without index..

const states = ["Jammu","Kashmir","Himachal","Gujarat","Maharashtra","Assam","Tamilnadu","Telangana","Andhrapradesh","Sikkim","Manipur","Delhi","Arunachal"]

//Forof loop to iterate the above array
 for (const state of states.entries()) {
    const [num,name] = state
    console.log(num+1,name);

 }

//  Assisgments
const buks = [
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
//  case 1 : Use the for-of loop to loop over the books array and sum the pages of all books. 
//  Use the pageSum variable below, and the pages property of the book objects.
let pageSum = 0;
for (const book of buks) {
    pageSum+=book.pages
}
console.log(`====case 1====`,pageSum);
//  case 2 : Below is the allAuthors variable which stores an empty array. 
//  Use the for-of loop to fill allAuthors with the authors of each book from the books array.
//  Remember that each book object has the author property,
//   which can be a string (if there is only a single author) or 
//   an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. 
//   The allAuthors array should have just one level (no nested arrays).
 
 const allAuthors = [];
 for (const book of buks) {
    if(typeof(book.author) === 'string'){
        allAuthors.push(book.author)
    }else{
        for (const authr of book.author) {
            allAuthors.push(authr)
        }
    }

 }
 console.log(` case 2 ====`,allAuthors);

//  case 3: Use the for-of loop together with Array's entries() method to log each author from allAuthors to 
//  the console together with its index. Make the index start from 1, instead of 0.
 
console.log("======case 3======")
for (const [num,name] of allAuthors.entries()) {
    console.log(num+1,name)
}


//Optional Chaining (?.) Assignments
// case 1 - Write a function called getFirstKeyword that takes the book object as an argument. 
//This function should return the first keyword from the book's keywords property (array) or 
//undefined (if the keywords property doesn't exist).
//It shouldn't throw an error. Use optional chaining for that.
function getFirstKeyword(obj) {
    
    return obj.keywords?.[3];
}

console.log('======Optional chaining===',getFirstKeyword(buks[1]));

//Looping Objects
/*
Below is the entries variable that stores an empty array. 
Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. 
For each key, push a new array that contains that key to the entries array.
*/
const entries = [];
for (const book of Object.keys(buks[0].thirdParty.goodreads)) {
   // const[[keys]] = book.thirdParty.goodreads
    entries.push(book)
    
}
//console.log(entries);


//case 2
const entrys = [];
console.log(` =========case 2==========`);
const goodreadsValues = Object.values(buks[0].thirdParty.goodreads);

for (const [index, value] of goodreadsValues.entries()) {
    entrys.push([index+1, value]);
}

console.log(entrys);


//case 3 

const entries2 = Object.entries(buks[0].thirdParty.goodreads)
console.log(`=======case 3==`,entries2);