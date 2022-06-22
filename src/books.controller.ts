import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common";

import { Book } from "./book.model";
import { BooksService } from "./books.service";

@Controller("books")
class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(":id")
  async getOne(@Param() params): Promise<Book> {
    return this.booksService.getOne(params.id);
  }

  @Post()
  async create(@Body() book: Book): Promise<void> {
    this.booksService.create(book);
  }

  @Patch(":id")
  async update(@Param() params, @Body() book: Book): Promise<[number, Book[]]> {
    return this.booksService.update(params.id, book);
  }

  @Delete(":id")
  async delete(@Param() params): Promise<void> {
    this.booksService.delete(params.id);
  }
}

export { BooksController };
