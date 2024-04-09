"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currency = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
class currency extends sequelize_1.Model {
}
exports.currency = currency;
currency.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    CUR_CODE: {
        type: sequelize_1.DataTypes.STRING(4),
        allowNull: false,
    },
    FST_NAME: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    SND_NAME: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: true,
    },
    CURRCODE: {
        type: sequelize_1.DataTypes.STRING(4),
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
    tableName: "currency",
    sequelize: sequelize_2.sequelize1,
});
exports.default = currency;
