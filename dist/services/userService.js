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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const generateToken_1 = require("../utils/generateToken");
const code_1 = require("../responseCode/code");
const codeMsg_1 = require("../config/codeMsg");
class UserService {
}
exports.default = UserService;
// UserService.signup = async (
//   userName: string,
//   vendorName: string,
//   email: string,
//   password: string
// ) => {
//   try {
//     console.log(userName, vendorName, email, password);
//     console.log("inside try");
//     const existingUser = await (User as any).findOne({
//       where: { email: email },
//     });
//     console.log("existinguser");
//     if (existingUser) {
//       return { error: "Email already exists" };
//     }
//     console.log("eu", existingUser);
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log("hashedPassword", hashedPassword);
//     const user = await (User as any).create({
//       userName: userName,
//       vendorName: vendorName,
//       email: email,
//       password: hashedPassword,
//     });
//     console.log("userservice", user);
//     return { user };
//   } catch (err) {
//     return { error: err as unknown as Error };
//   }
// };
UserService.login = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hiiiiiiiiii");
    try {
        const user = yield index_1.chart_slacc.findOne({
            where: { USER: userName },
        });
        console.log("user", user);
        if (!user) {
            return {
                success: false,
                status: code_1.ResponseStatus.HTTP_BAD_REQUEST,
                message: codeMsg_1.messages.notRegistered,
            };
        }
        console.log("above password");
        if (password !== user.dataValues.PASSWORD) {
            return {
                success: false,
                status: code_1.ResponseStatus.HTTP_BAD_GATEWAY,
                message: codeMsg_1.messages.invalidLoginDetails,
            };
        }
        console.log("below password");
        // Check if the user has an existing session
        let session = yield index_1.UserSession.findOne({
            where: { user_name: user.dataValues.SUBL_NAME },
        });
        console.log("session finding");
        if (!session) {
            session = yield index_1.UserSession.create({
                user_name: user.dataValues.SUBL_NAME,
                sup_code: user.dataValues.SUBL_CODE,
                noOftimesLoggedin: 1,
            });
        }
        else {
            yield session.increment("noOftimesLoggedin");
        }
        console.log("created");
        const accessToken = (0, generateToken_1.generateAccessToken)(user.dataValues.USER);
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.linksendMessageEmail,
            data: { user, accessToken },
        };
    }
    catch (error) {
        return { error: error.message };
    }
});
// UserService.forgetPasswordService = async (req: any): Promise<any> => {
//   try {
//     const { email_id } = req.body;
//     const isUserExist = await (User as any).findOne({
//       where: { email: email_id },
//     });
//     console.log(isUserExist);
//     if (!isUserExist) {
//       return {
//         success: false,
//         status: ResponseStatus.HTTP_BAD_GATEWAY,
//         message: messages.notRegistered,
//       };
//     }
//     const user_id: number = isUserExist.id;
//     await sendMail(email_id, user_id);
//     return {
//       success: true,
//       status: ResponseStatus.HTTP_OK,
//       message: messages.linksendMessageEmail,
//     };
//   } catch (e) {
//     console.log(e);
//   }
// };
// UserService.resetPasswordService = async (req: any): Promise<any> => {
//   try {
//     const id = req?.id;
//     const { password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const update_password = await (User as any).update(
//       { password: hashedPassword },
//       { where: { id: id } }
//     );
//     return {
//       success: true,
//       status: ResponseStatus.HTTP_OK,
//       message: messages.resetPassword,
//     };
//   } catch (e) {
//     console.log(e);
//   }
// };
