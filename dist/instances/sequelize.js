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
exports.verifyDBConnection = exports.sequelize = void 0;
// import * as Sequelize from 'sequelize'
const sequelize_1 = require("sequelize");
// export const sequelize = new Sequelize(dbConfig.database!, dbConfig.username!, dbConfig.password, dbConfig);
const config = {
    username: "deepanrvdvenu@gmailcom",
    password: "sqlpassword",
    database: "rvd",
    host: "localhost",
    dialect: 'mysql'
};
exports.sequelize = new sequelize_1.Sequelize("rvd", "deepanrvdvenu@gmail.com", "sqlpassword", config);
const verifyDBConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    // Verify Database connection
    return yield exports.sequelize.authenticate();
});
exports.verifyDBConnection = verifyDBConnection;