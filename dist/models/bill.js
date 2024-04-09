"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
class Bill extends sequelize_1.Model {
}
exports.Bill = Bill;
Bill.init({
    _id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    supplier_name: sequelize_1.DataTypes.STRING,
    supplier_code: sequelize_1.DataTypes.STRING,
    type_of_raw_material: sequelize_1.DataTypes.STRING,
    invoice_number: sequelize_1.DataTypes.STRING,
    invoice_date: sequelize_1.DataTypes.DATE,
    date_of_delivery: sequelize_1.DataTypes.STRING,
    vehicle_number: sequelize_1.DataTypes.STRING,
    transport_document_details: sequelize_1.DataTypes.STRING,
    currency: sequelize_1.DataTypes.STRING,
    ewb_number: sequelize_1.DataTypes.STRING,
    dc_number: sequelize_1.DataTypes.STRING,
    vendor_item_id: sequelize_1.DataTypes.INTEGER,
    vendor_quantity_id: sequelize_1.DataTypes.INTEGER,
    attachments: sequelize_1.DataTypes.BLOB,
}, {
    tableName: "bill",
    sequelize: sequelize_2.sequelize2,
});
// Bill.belongsTo(vendor_item, { foreignKey: "vendor_item_id" });
// Bill.belongsTo(vendor_quantity, { foreignKey: "vendor_quantity_id" });
// sequelize.sync();
sequelize_2.sequelize2.sync({ logging: console.log });
