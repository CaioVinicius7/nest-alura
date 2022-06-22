import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Book } from "./book.model";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "docker",
      password: "nestjs",
      database: "books",
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService]
})
export class AppModule {}
