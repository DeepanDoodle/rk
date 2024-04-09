import { Model, DataTypes } from "sequelize";
import { sequelize2 } from "../instances/sequelize";
import { Bill } from "./bill";


export class attachments extends Model {
  public _id!: number;
  public invoice?: Buffer;
  public packing_list?: Buffer;
  public transport_document?: Buffer;
  public e_way_bill?: Buffer;
  public attachments?: Buffer;
  public arrayOfDocuments?: any[]; 
  public bill_id?: number;
}

(attachments as any).init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   invoice:DataTypes.BLOB,
   packing_list :DataTypes.BLOB,
   transport_document: DataTypes.BLOB,
   e_way_bill : DataTypes.BLOB,
    attachments: DataTypes.BLOB,
    arrayOfDocuments: DataTypes.JSON, 
    bill_id: DataTypes.INTEGER,

  },
  {
    tableName: "attachments",
    sequelize:sequelize2,
  }
);

attachments.belongsTo(Bill,{foreignKey:"bill_id"})

sequelize2.sync({ logging: console.log });
