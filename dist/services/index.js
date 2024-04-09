"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("./userService"));
const billService_1 = __importDefault(require("./billService"));
exports.default = { UserService: userService_1.default, billService: billService_1.default };
