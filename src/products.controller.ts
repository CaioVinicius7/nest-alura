import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common";

import { Product } from "./product.model";

@Controller("products")
class ProductsController {
  products: Product[] = [
    new Product("978-3-16-148410-0", "book 1", 29.9),
    new Product("879-3-16-148410-0", "book 2", 29.9),
    new Product("524-3-16-148410-0", "book 3", 29.9)
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(":id")
  getOne(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product): void {
    this.products.push(product);
  }

  @Patch(":id")
  update(@Param() params, @Body() product: Product): Product {
    return product;
  }

  @Delete(":id")
  delete(@Param() params): void {
    this.products.pop();
  }
}

export { ProductsController };
