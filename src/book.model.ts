import { Column, DataType, Model, Table } from "sequelize-typescript";
import { v4 as uuidV4 } from "uuid";

@Table
class Book extends Model<Book> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    defaultValue: uuidV4()
  })
  id: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false
  })
  value: number;
}

export { Book };
