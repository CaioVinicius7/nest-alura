import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common";

@Controller("products")
class ProductsController {
  @Get()
  getAll(): string {
    return "List all products";
  }

  @Get(":id")
  getOne(@Param() params): string {
    return `Return the data of ${params.id}`;
  }

  @Post()
  create(@Body() product): string {
    console.log(product);
    return "Created";
  }

  @Patch(":id")
  update(@Param() params, @Body() product): string {
    console.log(product);
    return `Update ${params.id}`;
  }

  @Delete(":id")
  delete(@Param() params): string {
    return `Delete ${params.id}`;
  }
}

export { ProductsController };
