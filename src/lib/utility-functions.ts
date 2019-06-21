import { Book, LibMgrCallback } from '../interfaces';
import { Category } from '../enums';

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getAllBooks(): Array<Book> {
  const books: Array<Book> = [
    {
      id: 1,
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true, category: Category.JavaScript
    },
    {
      id: 2,
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript
    },
    {
      id: 3,
      title:
      'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS
    },
    {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ];

  return books;
}

export function logFirstAvailable(books: Array<Book> = getAllBooks()): void {
  const numOfBooks: number = books.length;
  let title: string;

  for (const book of books) {
    if (book.available) {
      title = book.title;
      break;
    }
  }

  console.log(`Number of books: ${numOfBooks}`);
  console.log(`First available book title: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const books = getAllBooks();
  const titles: Array<string> = [];
  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

export function logBookTitles(titles: string[]): void {
  titles.forEach(title => console.log(title));
}

export function getBookByID(id: number): Book | undefined {
  const book = getAllBooks()
    .find(book => book.id === id);

  return book;
}

export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer Name: ${name}`);

  if (age) {
    console.log(`Customer Age: ${age}`);
  }

  if (city) {
    console.log(`Customer City: ${city}`);
  }
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer is ${customer}`);

  const titles: string[] = bookIDs
    .map(id => getBookByID(id))
    .filter(book => book && book.available)
    .map(book => book.title);

  return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProperty: string | boolean): string[] {
  const books = getAllBooks();
  let property;

  if (typeof bookProperty === 'string') {
    property = 'author';
  } else if (typeof bookProperty === 'boolean') {
    property = 'available';
  }

  const titles: string[] = books
    .filter(book => bookProperty === book[property])
    .map(book => book.title);

  return titles;
}

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
  setTimeout(() => {
    try {
      const books: Array<string> = getBookTitlesByCategory(category);

      if (books.length > 0) {
        callback(null, books);
      } else {
        throw new Error('No books found.');
      }
    } catch (error) {
      callback(error, null);
    }
  }, 3000);
}

export function logCategorySearch(error: Error, titles: string[]): void {
  if (error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log(`Book Titles: ${titles}`);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const books: Array<string> = getBookTitlesByCategory(category);
        if (books.length > 0) {
          resolve(books);
        } else {
          reject('No books found.');
        }
    }, 2000);
  });
}

export async function logSearchResults(category: Category) {
  let foundBooks = await getBooksByCategoryPromise(category);
  console.log(foundBooks);
}