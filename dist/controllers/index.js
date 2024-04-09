"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const user_controller_1 = __importDefault(require("./user.controller"));
const bill_controller_1 = __importDefault(require("./bill.controller"));
module.exports = {
    UserController: user_controller_1.default,
    billController: bill_controller_1.default,
};
