import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Book } from "./book.model";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DEFAULT,
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService]
})
export class AppModule {}
