import { Model, DataTypes } from "sequelize";
import { sequelize2 } from "../instances/sequelize";
import { Bill } from "./bill";

export class attachments extends Model {
  public _id!: number;
  public invoice?: string;
  public packing_list?: string;
  public transport_document?: string;
  public e_way_bill?: string;
  public array_of_documents?: any[];
  public bill_id?: number;
}

(attachments as any).init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    invoice: DataTypes.STRING,
    packing_list: DataTypes.STRING,
    transport_document: DataTypes.STRING,
    e_way_bill: DataTypes.STRING,
    array_of_documents: DataTypes.JSON,
    bill_id: DataTypes.INTEGER,
  },
  {
    tableName: "attachments",
    sequelize: sequelize2,
  }
);

attachments.belongsTo(Bill, { foreignKey: "bill_id" });

sequelize2.sync({ logging: console.log });
