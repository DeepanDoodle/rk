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
class UserController {
}
exports.default = UserController;
UserController.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userName, vendorName, email, password } = req.body;
    console.log(userName, vendorName, email, password);
    try {
        const result = yield userService_1.default.signup(userName, vendorName, email, password);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        console.log(result);
        console.log("user", result.user);
        return res.status(201).json(result.user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
UserController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    try {
        const result = yield userService_1.default.login(userName, password);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        const { user, accessToken } = result;
        return res.status(200).json({ user, accessToken });
    }
    catch (error) {
        console.error("Error in login controller:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
