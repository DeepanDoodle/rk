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
    po_number: DataTypes.NUMBER,
    item_code: DataTypes.NUMBER,
    description: DataTypes.STRING,
    balance_to_supply: DataTypes.NUMBER,
    uom: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    quantity_id: DataTypes.NUMBER,
    unit_price: DataTypes.FLOAT,
    value: DataTypes.FLOAT,
    gst_per: DataTypes.FLOAT,
    gst_value: DataTypes.FLOAT,
    total_value: DataTypes.FLOAT,
    bill_id: DataTypes.STRING,
  },
  {
    tableName: "vendor_item",
    sequalize:sequelize2,
  }
);
vendor_item.belongsTo(Bill, { foreignKey: "bill_id" });
//must map with rkstore potable

// sequelize.sync();
sequelize2.sync({ logging: console.log });
