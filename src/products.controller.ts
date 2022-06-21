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
import { ProductsService } from "./products.service";

@Controller("products")
class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productsService.getAll();
  }

  @Get(":id")
  getOne(@Param() params): Product {
    return this.productsService.getOne(params.id);
  }

  @Post()
  create(@Body() product: Product): void {
    this.productsService.create(product);
  }

  @Patch(":id")
  update(@Param() params, @Body() product: Product): Product {
    return this.productsService.update(params.id, product);
  }

  @Delete(":id")
  delete(@Param() params): void {
    this.productsService.delete(params.id);
  }
}

export { ProductsController };
