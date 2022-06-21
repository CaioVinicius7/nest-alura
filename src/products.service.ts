import { Injectable } from "@nestjs/common";

import { Product } from "./product.model";

@Injectable()
class ProductsService {
  products: Product[] = [
    new Product("978-3-16-148410-0", "book 1", 29.9),
    new Product("879-3-16-148410-0", "book 2", 29.9),
    new Product("524-3-16-148410-0", "book 3", 29.9)
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: string): Product {
    return this.products[0];
  }

  create(product: Product): void {
    this.products.push(product);
  }

  update(id: string, product: Product): Product {
    return product;
  }

  delete(id: string): void {
    this.products.pop();
  }
}

export { ProductsService };
