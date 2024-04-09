"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const validators_1 = __importDefault(require("../../validators"));
const express_1 = __importDefault(require("express"));
const userRoutes = express_1.default.Router();
// userRoutes.post("/signup", UserController.signup);
userRoutes.post("/login", validators_1.default.user.loginValidation, user_controller_1.default.login);
// userRoutes.post(
// "/forgetPassword",
// validator.user.forgetPasswordValidation,
// UserController.forgetPasswordController
// );
// userRoutes.post(
//   "/resetPassword/:token",
//   Authenticate.verifyToken,
//   validator.user.resetPasswordValidation,
//   UserController.resetPasswordController
// );
exports.default = userRoutes;
