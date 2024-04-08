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
    user_name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    logged_session: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    sup_code: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: false
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: "userSession",
    sequelize: sequelize_2.sequelize2,
    hooks: {
        beforeCreate: (userSession) => {
            userSession.logged_session = new Date();
        },
    },
});
// sequelize1.sync();
