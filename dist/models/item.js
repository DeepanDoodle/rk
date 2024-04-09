"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
class item extends sequelize_1.Model {
}
item.init({
    MCATCODE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    MCATDESC: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    PURCH_AC_CD: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    PURCH_AC_CD_OTH: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    PROCESS_AC_CD: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    PROCESS_AC_CD_OTH: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    ACTIVE: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    ATTACHMENTS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    ATTACHMENT_COMMENTS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize1,
    modelName: 'product', // Set the table name explicitly
    timestamps: false, // Disable timestamps columns (createdAt, updatedAt)
});
exports.default = item;
