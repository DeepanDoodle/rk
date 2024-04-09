"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceToSupply = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
class balanceToSupply extends sequelize_1.Model {
}
exports.balanceToSupply = balanceToSupply;
balanceToSupply.init({
    _id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    po_number: sequelize_1.DataTypes.STRING,
    item_code: sequelize_1.DataTypes.STRING,
    required_quantity: sequelize_1.DataTypes.STRING,
    balance: sequelize_1.DataTypes.STRING,
}, {
    tableName: "balanceToSupply",
    sequelize: sequelize_2.sequelize2,
});
sequelize_2.sequelize2.sync({ logging: console.log });
