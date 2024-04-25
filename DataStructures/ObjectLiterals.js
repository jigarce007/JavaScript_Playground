//Object Literals

//  Assisgments
const bookData = [
    ['title', 'Computer Networking: A Top-Down Approach'],
    ['author', ['James F. Kurose', 'Keith W. Ross']],
    ['publisher', 'Addison Wesley'],
  ];
  
  // Do the rest
  const newBook = {
    [bookData[0][0]]: bookData[0][1]
    // ...
  };

  const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
 pages
}
console.log(newBook2);

