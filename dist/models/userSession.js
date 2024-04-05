"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSession = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
class UserSession extends sequelize_1.Model {
}
exports.UserSession = UserSession;
UserSession.init({
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
    // vendorName: {
    //   type: new DataTypes.STRING(128),
    //   allowNull: true,
    //   unique:true,
    // },
    // email: {
    //   type: new DataTypes.STRING(128),
    //   allowNull: true,
    //   unique: true,
    // },
    // password: {
    //   type: new DataTypes.STRING(128),
    //   allowNull: false,
    // },
    loggedSession: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: "userSession",
    sequelize: sequelize_2.sequelize1,
});
// sequelize1.sync();
