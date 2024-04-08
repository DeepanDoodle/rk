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
const userService_1 = __importDefault(require("../services/userService"));
const response_1 = __importDefault(require("../responses/response"));
const code_1 = require("../responseCode/code");
class UserController {
}
exports.default = UserController;
UserController.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userName, vendorName, email, password } = req.body;
    console.log(userName, vendorName, email, password);
    try {
        const result = yield userService_1.default.signup(userName, vendorName, email, password);
        if (result.error) {
            return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "Signup error");
        }
        console.log(result);
        console.log("user", result.user);
        return response_1.default.success(req, res, code_1.ResponseStatus.HTTP_CREATED, result.user, "User created");
    }
    catch (error) {
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "Signup error");
    }
});
UserController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    console.log(userName);
    try {
        const result = yield userService_1.default.login(userName, password);
        if (!result.success) {
            return response_1.default.errors(req, res, result.status, result.message);
        }
        // if (!result.success) {
        //   // return res.status(400).json({ error: result.error });
        //   return response.errors(
        //     req,
        //     res,
        //     ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
        //     "Login error"
        //   );
        // }
        const { user, accessToken } = result;
        // return res.status(200).json({ user, accessToken });
        const userObject = { user, accessToken };
        return response_1.default.success(req, res, code_1.ResponseStatus.HTTP_CREATED, userObject, "Successfully LoggedIn");
        // return response.success(req, res,result.status,result.data,result.message);
    }
    catch (error) {
        console.error("Error in login controller:", error);
        // return res.status(500).json({ error: "Internal server error" });
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "Login error");
    }
});
UserController.forgetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.forgetPasswordService(req);
        if (!result.success) {
            return response_1.default.errors(req, res, result.status, result.message);
        }
        return response_1.default.success(req, res, result.status, null, result.message);
    }
    catch (err) {
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "internal server error");
    }
});
UserController.resetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.resetPasswordService(req);
        return response_1.default.success(req, res, result.status, null, result.message);
    }
    catch (err) {
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "internal server error");
    }
});
