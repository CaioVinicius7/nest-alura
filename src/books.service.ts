import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Book } from "./book.model";

@Injectable()
class BooksService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book
  ) {}

  async getAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getOne(id: string): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  async create(book: Book): Promise<void> {
    this.bookModel.create(book);
  }

  async update(id: string, book: Book): Promise<[number, Book[]]> {
    return this.bookModel.update(book, {
      where: {
        id
      }
    });
  }

  async delete(id: string): Promise<void> {
    const book: Book = await this.bookModel.findByPk(id);
    book.destroy();
  }
}

export { BooksService };
