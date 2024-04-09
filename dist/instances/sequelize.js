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
exports.verifyDBConnection = exports.sequelize3 = exports.sequelize2 = exports.sequelize1 = void 0;
// import * as Sequelize from 'sequelize'
const sequelize_1 = require("sequelize");
// export const sequelize = new Sequelize(dbConfig.database!, dbConfig.username!, dbConfig.password, dbConfig);
const config1 = {
    username: "root",
    password: "Rishvan3@",
    database: "rk_master",
    host: "localhost",
    dialect: "mysql",
};
const config2 = {
    username: "root",
    password: "Rishvan3@",
    database: "user",
    host: "localhost",
    dialect: "mysql",
};
const config3 = {
    username: "root",
    password: "Rishvan3@",
    database: "rkstore",
    host: "localhost",
    dialect: "mysql",
};
exports.sequelize1 = new sequelize_1.Sequelize("rk_master", "root", "Rishvan3@", config1);
exports.sequelize2 = new sequelize_1.Sequelize("user", "root", "Rishvan3@", config2);
exports.sequelize3 = new sequelize_1.Sequelize("rkstore", "root", "Rishvan3@", config3);
const verifyDBConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Promise.all([exports.sequelize1.authenticate(), exports.sequelize2.authenticate(), exports.sequelize3.authenticate()]);
});
exports.verifyDBConnection = verifyDBConnection;
