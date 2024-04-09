import { Model, DataTypes } from "sequelize";
import { sequelize2 } from "../instances/sequelize";

export class balanceToSupply extends Model {
  public _id!: number;
  public po_number : string|undefined;
  public item_code : string|undefined;
  public required_quantity : string|undefined;
  public balance : string|undefined;
}

(balanceToSupply as any).init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    po_number:DataTypes.STRING ,
    item_code : DataTypes.STRING,
    required_quantity: DataTypes.STRING,
    balance : DataTypes.STRING,
   
  },
  {
    tableName: "balanceToSupply",
    sequelize:sequelize2,
  }
);


sequelize2.sync({ logging: console.log });
