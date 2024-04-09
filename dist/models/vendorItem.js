"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendor_item = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
const bill_1 = require("./bill");
class vendor_item extends sequelize_1.Model {
}
exports.vendor_item = vendor_item;
vendor_item.init({
    _id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    po_number: sequelize_1.DataTypes.INTEGER,
    item_code: sequelize_1.DataTypes.INTEGER,
    description: sequelize_1.DataTypes.STRING,
    balance_to_supply: sequelize_1.DataTypes.INTEGER,
    uom: sequelize_1.DataTypes.STRING,
    quantity: sequelize_1.DataTypes.INTEGER,
    quantity_id: sequelize_1.DataTypes.INTEGER,
    unit_price: sequelize_1.DataTypes.FLOAT,
    value: sequelize_1.DataTypes.FLOAT,
    gst_per: sequelize_1.DataTypes.FLOAT,
    gst_value: sequelize_1.DataTypes.FLOAT,
    total_value: sequelize_1.DataTypes.FLOAT,
    bill_id: sequelize_1.DataTypes.INTEGER,
}, {
    tableName: "vendor_item",
    sequelize: sequelize_2.sequelize2,
});
vendor_item.belongsTo(bill_1.Bill, { foreignKey: "bill_id" });
//must map with rkstore potable
// sequelize.sync();
sequelize_2.sequelize2.sync({ logging: console.log });
