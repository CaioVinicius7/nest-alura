import { Injectable } from "@nestjs/common";

import { Book } from "./book.model";

@Injectable()
class BooksService {
  products: Book[] = [
    new Book("978-3-16-148410-0", "book 1", 29.9),
    new Book("879-3-16-148410-0", "book 2", 29.9),
    new Book("524-3-16-148410-0", "book 3", 29.9)
  ];

  getAll(): Book[] {
    return this.products;
  }

  getOne(id: string): Book {
    return this.products[0];
  }

  create(product: Book): void {
    this.products.push(product);
  }

  update(id: string, product: Book): Book {
    return product;
  }

  delete(id: string): void {
    this.products.pop();
  }
}

export { BooksService };
