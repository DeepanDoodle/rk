"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import Sequelize module and DataTypes
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize"); // Import your Sequelize instance
// Define the User model
class Account extends sequelize_1.Model {
}
// Initialize the Account model
Account.init({
    ACC_TYPE: {
        type: sequelize_1.DataTypes.CHAR(2),
        allowNull: false,
        primaryKey: true,
    },
    SUBL_CODE: {
        type: sequelize_1.DataTypes.STRING(8),
        allowNull: false,
    },
    SUBL_NAME: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    PAYCODE: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    ACC_CODE: {
        type: sequelize_1.DataTypes.STRING(8),
        allowNull: false,
    },
    CHEQ_NAME: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: true,
    },
    CSTNO: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    LSTNO: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    GRP_CODE: {
        type: sequelize_1.DataTypes.CHAR(2),
        allowNull: true,
    },
    AGNT_ACTIVE: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false,
    },
    AGNT_CODE: {
        type: sequelize_1.DataTypes.STRING(8),
        allowNull: true,
    },
    VAL_DESC1: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    VAL_DESC1DB: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    VAL_DESC1TBL: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    VAL_DESC1FLD: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    VAL_DESC2: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    VAL_DESC2DB: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    VAL_DESC2TBL: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    VAL_DESC2FLD: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    SUB_LEG_TYPE: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    COUNTRY: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    STATE: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    TDS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    PANNO: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    },
    ACTIVE: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    USER: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    PASSWORD: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    ATTACHMENTS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    ATTACHMENT_COMMENTS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    copy_flag: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: sequelize_2.sequelize1,
    modelName: 'Account',
    tableName: 'accounts',
    timestamps: false,
});
exports.default = Account;
