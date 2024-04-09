"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bill_validator_1 = __importDefault(require("./bill.validator"));
const user_validator_1 = __importDefault(require("./user.validator"));
const validator = {
    user: user_validator_1.default,
    bill: bill_validator_1.default
};
exports.default = validator;
