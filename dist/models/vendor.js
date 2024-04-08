"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendor = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
const po_1 = require("./po");
class vendor extends sequelize_1.Model {
}
exports.vendor = vendor;
vendor.init({
    vendorId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    vendorName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    poid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "vendors",
    sequelize: sequelize_2.sequelize,
});
vendor.belongsTo(po_1.po, { foreignKey: 'poid' });
// sequelize.sync();
sequelize_2.sequelize.sync({ logging: console.log });
