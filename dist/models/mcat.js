"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcat = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
class mcat extends sequelize_1.Model {
}
exports.mcat = mcat;
mcat.init({
    ACTIVE: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    ATTACHMENT_COMMENTS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    ATTACHMENTS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    MCATCODE: {
        type: sequelize_1.DataTypes.STRING(1),
        primaryKey: true,
        allowNull: false,
    },
    MCATDESC: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    PROCESS_AC_CD: {
        type: sequelize_1.DataTypes.STRING(9),
        allowNull: true,
    },
    PROCESS_AC_CD_OTH: {
        type: sequelize_1.DataTypes.STRING(9),
        allowNull: true,
    },
    PURCH_AC_CD: {
        type: sequelize_1.DataTypes.STRING(9),
        allowNull: true,
    },
    PURCH_AC_CD_OTH: {
        type: sequelize_1.DataTypes.STRING(9),
        allowNull: true,
    },
}, {
    tableName: "mcat",
    sequelize: sequelize_2.sequelize1,
});
exports.default = mcat;
