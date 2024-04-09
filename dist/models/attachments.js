"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachments = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
const bill_1 = require("./bill");
class attachments extends sequelize_1.Model {
}
exports.attachments = attachments;
attachments.init({
    _id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    invoice: sequelize_1.DataTypes.STRING,
    packing_list: sequelize_1.DataTypes.STRING,
    transport_document: sequelize_1.DataTypes.STRING,
    e_way_bill: sequelize_1.DataTypes.STRING,
    array_of_documents: sequelize_1.DataTypes.JSON,
    bill_id: sequelize_1.DataTypes.INTEGER,
}, {
    tableName: "attachments",
    sequelize: sequelize_2.sequelize2,
});
attachments.belongsTo(bill_1.Bill, { foreignKey: "bill_id" });
sequelize_2.sequelize2.sync({ logging: console.log });
