import { ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
  private _items: Array<T> = [];

  add(items: Array<T>): void {
    this._items.push(...items);
  }

  getFirst(): T {
    return this._items[0];
  }

  find(title: string): T {
    return this._items
      .find(item => item.title === title);
  }

  printTitles(): void {
    this._items
      .forEach(item => console.log(item.title));
  }
}