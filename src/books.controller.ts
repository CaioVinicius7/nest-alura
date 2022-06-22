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
  constructor(private productsService: BooksService) {}

  @Get()
  getAll(): Book[] {
    return this.productsService.getAll();
  }

  @Get(":id")
  getOne(@Param() params): Book {
    return this.productsService.getOne(params.id);
  }

  @Post()
  create(@Body() product: Book): void {
    this.productsService.create(product);
  }

  @Patch(":id")
  update(@Param() params, @Body() product: Book): Book {
    return this.productsService.update(params.id, product);
  }

  @Delete(":id")
  delete(@Param() params): void {
    this.productsService.delete(params.id);
  }
}

export { BooksController };
