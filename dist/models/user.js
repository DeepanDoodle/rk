"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
class user extends sequelize_1.Model {
}
exports.user = user;
user.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
        unique: true,
    },
    vendorName: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
        unique: true,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
        unique: true,
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: "users",
    sequelize: sequelize_2.sequelize, // passing the `sequelize` instance is required
});
// sequelize.sync();
sequelize_2.sequelize.sync({ logging: console.log });
