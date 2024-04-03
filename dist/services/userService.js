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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = require("../utils/generateToken");
class UserService {
}
exports.default = UserService;
UserService.signup = (userName, vendorName, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(userName, vendorName, email, password);
        console.log("inside try");
        const existingUser = yield user_1.User.findOne({ where: { email: email } });
        console.log("existinguser");
        if (existingUser) {
            return { error: "Email already exists" };
        }
        console.log("eu", existingUser);
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        console.log("hashedPassword", hashedPassword);
        const user = yield user_1.User.create({
            userName: userName,
            vendorName: vendorName,
            email: email,
            password: hashedPassword,
        });
        console.log("userservice", user);
        return { user };
    }
    catch (err) {
        return { error: err };
    }
});
UserService.login = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.User.findOne({ where: { userName: userName } });
        if (!user) {
            return { error: "User not found" };
        }
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return { error: "Invalid password" };
        }
        const accessToken = (0, generateToken_1.generateAccessToken)(user.id);
        return { user, accessToken };
    }
    catch (error) {
        return { error: error.message };
    }
});
