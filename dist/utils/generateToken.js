"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateAccessToken(userId) {
    const accessToken = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRATION });
    return accessToken;
}
exports.generateAccessToken = generateAccessToken;
