import { Category } from './enums';

interface DamageLogger {
  (reason: string): void;
}

interface ShelfItem {
  title: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger;
}

interface Magazine {
  title: string;
  publisher: string;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

interface LibMgrCallback {
  (err: Error, titles: string[]): void;
}

export {
  DamageLogger as Logger,
  ShelfItem,
  Book,
  Magazine,
  Person,
  Author,
  Librarian,
  LibMgrCallback,
};