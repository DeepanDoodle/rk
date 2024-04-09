import { Model, DataTypes } from "sequelize";
import { sequelize2 } from "../instances/sequelize";
import { vendor_item } from "./vendorItem";
import { vendor_quantity } from "./vendorQuantity";

export class Bill extends Model {
  public _id!: number;
  public supplier_name!: string;
  public supplier_code !: number;
  public type_of_raw_material!: string;
  public invoice_number!: number;
  public invoice_date!: Date;
  public date_of_delivery!: string;
  public vehicle_number!: string;
  public transport_document_details!: string;
  public currency!: string;
  public ewb_number!: string;
  public dc_number!: string ;
  public vendor_item_id!: number;
  public vendor_quantity_id!: number;
}

(Bill as any).init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    supplier_name: DataTypes.STRING,
    supplier_code : DataTypes.STRING,
    type_of_raw_material: DataTypes.STRING,
    invoice_number: DataTypes.STRING,
    invoice_date: DataTypes.DATE,
    date_of_delivery: DataTypes.STRING,
    vehicle_number: DataTypes.STRING,
    transport_document_details: DataTypes.STRING,
    currency: DataTypes.STRING,
    ewb_number: DataTypes.STRING,
    dc_number: DataTypes.STRING,
    vendor_item_id: DataTypes.INTEGER,
    vendor_quantity_id: DataTypes.INTEGER,
    attachments: DataTypes.BLOB,
  },
  {
    tableName: "bill",
    sequelize:sequelize2,
  }
);



// sequelize.sync();
sequelize2.sync({ logging: console.log });
