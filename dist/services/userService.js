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
const index_1 = require("../models/index");
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = require("../utils/generateToken");
const code_1 = require("../responseCode/code");
const codeMsg_1 = require("../config/codeMsg");
const email_1 = __importDefault(require("../utils/email"));
class UserService {
}
exports.default = UserService;
UserService.signup = (userName, vendorName, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(userName, vendorName, email, password);
        console.log("inside try");
<<<<<<< HEAD
        const existingUser = yield user_1.user.findOne({
            where: { email: email },
        });
=======
        const existingUser = yield index_1.User.findOne({ where: { email: email } });
>>>>>>> 412b12b5a39d711210a2f0defbd463fca5ce25e5
        console.log("existinguser");
        if (existingUser) {
            return { error: "Email already exists" };
        }
        console.log("eu", existingUser);
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        console.log("hashedPassword", hashedPassword);
<<<<<<< HEAD
        const usercreated = yield user_1.user.create({
=======
        const user = yield index_1.User.create({
>>>>>>> 412b12b5a39d711210a2f0defbd463fca5ce25e5
            userName: userName,
            vendorName: vendorName,
            email: email,
            password: hashedPassword,
        });
        console.log("userservice", user_1.user);
        return { usercreated };
    }
    catch (err) {
        return { error: err };
    }
});
UserService.login = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
<<<<<<< HEAD
        const user_found = yield user_1.user.findOne({
            where: { userName: userName },
        });
        if (!user_found) {
            return { error: "User not found" };
        }
        const passwordMatch = yield bcrypt_1.default.compare(password, user_found.password);
        if (!passwordMatch) {
            return { error: "Invalid password" };
        }
        const accessToken = (0, generateToken_1.generateAccessToken)(user_found.id);
        return { user_found, accessToken };
=======
        const user = yield index_1.chart_slacc.findOne({ where: { USER: userName } });
        // console.log("userrrrrrrrrr",user)
        if (!user) {
            return {
                success: false,
                status: code_1.ResponseStatus.HTTP_BAD_GATEWAY,
                message: codeMsg_1.messages.notRegistered,
            };
            ;
        }
        if (password != user.dataValues.PASSWORD) {
            return {
                success: false,
                status: code_1.ResponseStatus.HTTP_BAD_GATEWAY,
                message: codeMsg_1.messages.invalidLoginDetails,
            };
        }
        // if (!passwordMatch) {
        //   return { error: "Invalid password" };
        // }
        const accessToken = (0, generateToken_1.generateAccessToken)(user.id);
        console.log("hiiiiiii", user.dataValues.SUBL_NAME, user.dataValues.SUBL_CODE);
        const session = yield index_1.UserSession.create({ user_name: user.dataValues.SUBL_NAME, sup_code: user.dataValues.SUBL_CODE });
        console.log(session, "////////");
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.linksendMessageEmail,
            data: { user, accessToken }
        };
        // return { user, accessToken };
>>>>>>> 412b12b5a39d711210a2f0defbd463fca5ce25e5
    }
    catch (error) {
        return { error: error.message };
    }
});
UserService.forgetPasswordService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email_id } = req.body;
<<<<<<< HEAD
        const isUserExist = yield user_1.user.findOne({
            where: { email: email_id },
        });
=======
        const isUserExist = yield index_1.User.findOne({ where: { email: email_id } });
>>>>>>> 412b12b5a39d711210a2f0defbd463fca5ce25e5
        console.log(isUserExist);
        if (!isUserExist) {
            return {
                success: false,
                status: code_1.ResponseStatus.HTTP_BAD_GATEWAY,
                message: codeMsg_1.messages.notRegistered,
            };
        }
        const user_id = isUserExist.id;
        yield (0, email_1.default)(email_id, user_id);
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.linksendMessageEmail,
        };
    }
    catch (e) {
        console.log(e);
    }
});
UserService.resetPasswordService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req === null || req === void 0 ? void 0 : req.id;
        const { password } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
<<<<<<< HEAD
        const update_password = yield user_1.user.update({ password: hashedPassword }, { where: { id: id } });
=======
        const update_password = yield index_1.User.update({ password: hashedPassword }, { where: { id: id } });
>>>>>>> 412b12b5a39d711210a2f0defbd463fca5ce25e5
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.resetPassword,
        };
    }
    catch (e) {
        console.log(e);
    }
});
