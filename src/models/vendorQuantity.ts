import { Model, DataTypes } from "sequelize";
import { sequelize2 } from "../instances/sequelize";
import { Bill } from "./bill";
import { vendor_item } from "./vendorItem";

export class vendor_quantity extends Model {
  public _id!: number;
  public pkl_number!: number;
  public bale_number!: number;
  public quantity!: number;
  public remarks!: string;
  public vendor_item_id: string | undefined;
  public bill_id: number | undefined;
  barcode : string| undefined;
}

(vendor_quantity as any).init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pkl_number: DataTypes.INTEGER,
    bale_number: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    remarks: DataTypes.STRING,
    vendor_item_id:DataTypes.STRING,
    bill_id: DataTypes.INTEGER,
    barcode : DataTypes.STRING,
  },
  {
    tableName: "vendor_quantity",
    sequelize: sequelize2,
  }
);

vendor_quantity.belongsTo(vendor_item,{foreignKey:"vendor_item_id"});
vendor_quantity.belongsTo(Bill,{foreignKey:"bill_id"});

// sequelize.sync();
sequelize2.sync({ logging: console.log });
