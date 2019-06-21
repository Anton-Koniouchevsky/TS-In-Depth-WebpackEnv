import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import {
  UniversityLibrarian,
  ReferenceItem,
  RefBook,
  Shelf,
  ViewController
} from './classes';
import {
  purge,
  logFirstAvailable,
  getAllBooks,
  getBookTitlesByCategory,
  logBookTitles,
  getBookByID,
  createCustomerID,
  createCustomer,
  сheckoutBooks,
  getTitles,
  printBook,
  getBooksByCategory,
  logCategorySearch,
  getBooksByCategoryPromise,
  logSearchResults
} from './lib/utility-functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// -----------------------------------------------------------
// Task 1
/* logFirstAvailable(getAllBooks()); */


// Task 2
/* let titles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(titles); */


// Task 3
/* titles.forEach(title => console.log(title));

const bookWithID = getBookByID(2);
console.log(bookWithID);

const notFoundID = getBookByID(100);
console.log(notFoundID); */


// Task 4
/* const myID: string = createCustomerID('Ann', 10);
console.log(myID);

type GeneratorType = (name: string, id: number) => string;
let idGenerator: GeneratorType;

idGenerator = (name: string, id: number) => `${name}${id}`;
console.log(idGenerator('Ann', 20));

idGenerator = createCustomerID;
console.log(idGenerator('Ann', 30)); */


// Task 5
/* createCustomer('Ann');
createCustomer('Ann', 21);
createCustomer('Ann', 21, 'Minsk');

titles = getBookTitlesByCategory();
console.log(titles);

logFirstAvailable();

const myBooks = сheckoutBooks('Ann', 1, 2, 4, 15);

myBooks.forEach(book => console.log(book)); */


// Task 6
/* let checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);

checkedOutBooks = getTitles('Lea Verou');
console.log(checkedOutBooks); */


// Task 7
/* const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
};

printBook(myBook);
myBook.markDamaged('missing back cover'); */


// Task 8
/* let logDamage: Logger = (reason: string): void => {
  console.log(`Damaged: ${reason}`);
};

logDamage('damage 1');

function damageLogger(reason: string): void {
  console.log(`Damaged: ${reason}`);
}

logDamage = damageLogger;

logDamage('damage 2'); */


// Task 9
/* const favoriteAuthor: Author = {
  name: 'Anna',
  email: 'anna@example.com',
  numBooksPublished: 10,
};

let favoriteLibrarian: Librarian = {
  name: 'Boris',
  email: 'boris@example.com',
  department: '',
  assistCustomer: (custName: string) => console.log(custName),
}; */


// Task 10
/* favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';
favoriteLibrarian.assistCustomer('Tom'); */


// Task 11
/* const ref = new ReferenceItem('My Title', 2010);
console.log(ref);
ref.printItem();

ref.publisher = 'O\'Really';
console.log(ref.publisher); */


// Task 12
/* const refBook = new RefBook('Title', 2018, 2);
console.log(refBook);
refBook.printItem(); */


// Task 13
/* refBook.printCitation(); */


// Task 18
/* const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
]; */

/* let result: Array<Book> | Array<number> = purge<Book>(inventory);
console.log(result);

result = purge([1, 2, 3, 4]);
console.log(result); */


// Task 19
/* const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
bookShelf.add(inventory);

console.log(bookShelf.getFirst());



const magazineShelf = new Shelf<Magazine>();
magazineShelf.add(magazines);

console.log(magazineShelf.getFirst()); */


// Task 20
/* const magazines: Array<Magazine> = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf = new Shelf<Magazine>();
magazineShelf.add(magazines);

magazineShelf.printTitles();
const result = magazineShelf.find('Five Points');
console.log(result); */


// Task 21, 22
/* const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';

UniversityLibrarian['property'] = 1;
console.log(UniversityLibrarian);

// as we changed prototype it should work
UniversityLibrarian.prototype['property'] = 1;
console.log(UniversityLibrarian.prototype);

favoriteLibrarian['printLibrarian'](); */


// Task 23
/* const favoriteLibrarian = new UniversityLibrarian();

favoriteLibrarian.assistFaculty = () => console.log('Changed AssistFaculty');
favoriteLibrarian.teachCommunity = () => console.log('Changed TeachCommunity'); */


// Task 24
/* const encyclopedia = new RefBook('Title', 2010, 2);
encyclopedia.printItem(); */


// Task 25
/* const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';

favoriteLibrarian.assistCustomer('Boris'); */


// Task 26
/* const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';

console.log(favoriteLibrarian.name); */

// Task 27
/* const encyclopedia = new RefBook('Title', 2010, 2);

encyclopedia.copies = 1;
// encyclopedia.copies = 0;
// encyclopedia.copies = -10; */

// Task 28
/* console.log('Start');
getBooksByCategory(Category.JavaScript, logCategorySearch);
console.log('Finish');

console.log('Start');
getBooksByCategory(Category.Software, logCategorySearch);
console.log('Finish'); */


// Task 29
/* console.log('Start');
getBooksByCategoryPromise(Category.JavaScript)
  .then(titles => {
    console.log(titles);
    return titles.length;
  })
  .then(count => console.log(`Number of Books: ${count}`))
  .catch(error => console.log(error.message))
  .finally(() => console.log('Complete!'));
console.log('Finish');

console.log('Start');
getBooksByCategoryPromise(Category.Software)
  .then(titles => console.log(titles))
  .catch(error => console.log(error))
  .finally(() => console.log('Complete!'));
  console.log('Finish'); */


// Task 30
/* console.log('Beginning search...');
logSearchResults(Category.JavaScript)
  .catch(reason => console.log(reason));
console.log('Search submitted...');

console.log('Beginning search...');
logSearchResults(Category.Software)
  .catch(reason => console.log(reason));
console.log('Search submitted...'); */


// Task 31
// method decorator @Confirmable was added
const button = document.getElementById('button');
const viewController = new ViewController();

button.addEventListener('click', viewController.clickButton);