"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
class user extends sequelize_1.Model {
}
<<<<<<< HEAD
exports.user = user;
user.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
=======
exports.User = User;
User.init({
    SUPCODE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
>>>>>>> 412b12b5a39d711210a2f0defbd463fca5ce25e5
        primaryKey: true,
    },
    PARTY_TYP: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false,
    },
    NAME: {
        type: new sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    ADD1: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: true,
        unique: true,
    },
    ADD2: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: true,
    },
    ADD3: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: true,
    },
    ADD4: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: true,
    },
    ADD5: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: true,
    },
    COUNTRY: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    STATE: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    PINCODE: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: true,
    },
    ABRVAT: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: true,
    },
    UP_FL: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: true,
    },
    SRLNO: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    UPDATED: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    COMPCODE: {
        type: sequelize_1.DataTypes.STRING(3),
        allowNull: false,
    },
    ACTIVE: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: true,
    },
}, {
    sequelize: sequelize_2.sequelize1, // Pass your Sequelize instance
    tableName: 'users', // Name of the table in the database
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
});
<<<<<<< HEAD
// sequelize.sync();
sequelize_2.sequelize.sync({ logging: console.log });
=======
// sequelize1.sync();
>>>>>>> 412b12b5a39d711210a2f0defbd463fca5ce25e5
