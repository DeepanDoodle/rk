"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendor_quantity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
const bill_1 = require("./bill");
const vendorItem_1 = require("./vendorItem");
class vendor_quantity extends sequelize_1.Model {
}
exports.vendor_quantity = vendor_quantity;
vendor_quantity.init({
    _id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pkl_number: sequelize_1.DataTypes.INTEGER,
    bale_number: sequelize_1.DataTypes.INTEGER,
    quantity: sequelize_1.DataTypes.INTEGER,
    remarks: sequelize_1.DataTypes.STRING,
    vendor_item_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    bill_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    barcode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "vendor_quantity",
    sequelize: sequelize_2.sequelize2,
});
vendor_quantity.belongsTo(vendorItem_1.vendor_item, { foreignKey: "vendor_item_id" });
vendor_quantity.belongsTo(bill_1.Bill, { foreignKey: "bill_id" });
// sequelize.sync();
sequelize_2.sequelize2.sync({ logging: console.log });
