"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const authentication_1 = require("../../middleware/authentication");
const validators_1 = __importDefault(require("../../validators"));
const express_1 = __importDefault(require("express"));
const userRoutes = express_1.default.Router();
userRoutes.post("/signup", user_controller_1.default.signup);
userRoutes.post("/login", validators_1.default.user.loginValidation, user_controller_1.default.login);
userRoutes.post("/forgetPassword", validators_1.default.user.forgetPasswordValidation, user_controller_1.default.forgetPasswordController);
userRoutes.post("/resetPassword/:token", authentication_1.Authenticate.verifyToken, validators_1.default.user.resetPasswordValidation, user_controller_1.default.resetPasswordController);
exports.default = userRoutes;
