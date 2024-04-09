"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize"); // assuming you have a sequelize instance set up
// Define the po model
class po extends sequelize_1.Model {
}
// Initialize the po model
po.init({
    CCODE: sequelize_1.DataTypes.STRING,
    PONO: sequelize_1.DataTypes.STRING,
    PODATE: sequelize_1.DataTypes.DATE,
    POTYPE: sequelize_1.DataTypes.STRING,
    BUYERCODE: sequelize_1.DataTypes.STRING,
    BUYCODE: sequelize_1.DataTypes.STRING,
    PROTYPE: sequelize_1.DataTypes.STRING,
    ISN_NO: sequelize_1.DataTypes.TEXT,
    CORD_SLNO: sequelize_1.DataTypes.STRING,
    SUPCODE: sequelize_1.DataTypes.STRING,
    ADD_SLNO: sequelize_1.DataTypes.INTEGER,
    CUR_CODE: sequelize_1.DataTypes.STRING,
    EX_RATE: sequelize_1.DataTypes.DOUBLE,
    PAYCODE: sequelize_1.DataTypes.INTEGER,
    WASHING: sequelize_1.DataTypes.STRING,
    DELVTERM: sequelize_1.DataTypes.STRING,
    status: sequelize_1.DataTypes.STRING,
    comments: sequelize_1.DataTypes.TEXT,
    REM1: sequelize_1.DataTypes.TEXT,
    REM2: sequelize_1.DataTypes.STRING,
    REM3: sequelize_1.DataTypes.STRING,
    REM4: sequelize_1.DataTypes.STRING,
    REM5: sequelize_1.DataTypes.STRING,
    REM6: sequelize_1.DataTypes.STRING,
    SIZE_INFO: sequelize_1.DataTypes.STRING,
    QUALITY: sequelize_1.DataTypes.STRING,
    INCL_TAX: sequelize_1.DataTypes.STRING,
    CORD_CODE: sequelize_1.DataTypes.STRING,
    CONFIRM: sequelize_1.DataTypes.STRING,
    UP_LOADED: sequelize_1.DataTypes.STRING,
    REF_CLOSE: sequelize_1.DataTypes.STRING,
    CTRLNO: sequelize_1.DataTypes.STRING,
    NEWPONO: sequelize_1.DataTypes.STRING,
    NEWPONO1: sequelize_1.DataTypes.STRING,
    REV_NO: sequelize_1.DataTypes.INTEGER,
    LOC_ID: sequelize_1.DataTypes.INTEGER,
    copy_flag: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    edit_flag: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    sequelize: sequelize_2.sequelize3,
    tableName: "purchase_order", // Set the table name explicitly
    timestamps: false, // Disable timestamps columns (createdAt, updatedAt)
});
// Export the po model
exports.default = po;
