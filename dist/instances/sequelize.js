"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDBConnection = exports.sequelize2 = exports.sequelize1 = void 0;
// import * as Sequelize from 'sequelize'
const sequelize_1 = require("sequelize");
// export const sequelize = new Sequelize(dbConfig.database!, dbConfig.username!, dbConfig.password, dbConfig);
const config1 = {
    username: "root", password: "Rishvan3@",
    database: "rkismaster", host: "localhost",
    dialect: 'mysql'
};
const config2 = {
    username: "deepanrvdvenu@gmailcom",
    password: "sqlpassword",
    database: "rvd",
    host: "localhost",
    dialect: 'mysql'
};
exports.sequelize1 = new sequelize_1.Sequelize("db1", "root", "Rishvan3@", config1);
exports.sequelize2 = new sequelize_1.Sequelize("rvd", "deepanrvdvenu@gmail.com", "sqlpassword", config2);
const verifyDBConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    // Verify Database connection
    yield Promise.all([exports.sequelize1.authenticate(), exports.sequelize2.authenticate()]);
});
exports.verifyDBConnection = verifyDBConnection;
