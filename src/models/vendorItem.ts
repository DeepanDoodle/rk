import { Model, DataTypes } from "sequelize";
import { sequelize2 } from "../instances/sequelize";
import { vendor_quantity } from "./vendorQuantity";
import po from "./po";
import { Bill } from "./bill";

export class vendor_item extends Model {
  public _id!: number;
  public po_number!: string;
  public item_code!: string;
  public description!: string;
  public balance_to_supply!: number;
  public uom!: string;
  public quantity!: number;
  public unitPrice!: number;
  public value!: number;
  public gst_per!: number;
  public gst_value!: number;
  public totalValue!: number;
  public bill_id!: string;
}

(vendor_item as any).init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    po_number: DataTypes.INTEGER,
    item_code: DataTypes.INTEGER,
    description: DataTypes.STRING,
    balance_to_supply: DataTypes.INTEGER,
    uom: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    quantity_id: DataTypes.INTEGER,
    unit_price: DataTypes.FLOAT,
    value: DataTypes.FLOAT,
    gst_per: DataTypes.FLOAT,
    gst_value: DataTypes.FLOAT,
    total_value: DataTypes.FLOAT,
    bill_id: DataTypes.INTEGER,
  },
  {
    tableName: "vendor_item",
    sequelize:sequelize2,
  }
);
vendor_item.belongsTo(Bill, { foreignKey: "bill_id" });
//must map with rkstore potable

// sequelize.sync();
sequelize2.sync({ logging: console.log });
