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
// UserController.signup = async (req: Request, res: Response) => {
//   let { userName, vendorName, email, password } = req.body;
//   console.log(userName, vendorName, email, password);
//   try {
//     const result = await UserService.signup(
//       userName,
//       vendorName,
//       email,
//       password
//     );
//     if (result.error) {
//       return response.errors(
//         req,
//         res,
//         ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
//         "Signup error"
//       );
//     }
//     console.log(result);
//     console.log("user", result.user);
//     return response.success(
//       req,
//       res,
//       ResponseStatus.HTTP_CREATED,
//       result.user,
//       "User created"
//     );
//   } catch (error) {
//     return response.errors(
//       req,
//       res,
//       ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
//       "Signup error"
//     );
//   }
// };
UserController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    try {
        const result = yield userService_1.default.login(userName, password);
        // console.log(result.data,"cvbnm")
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
        // const { user, accessToken } = result;
        // return res.status(200).json({ user, accessToken });
        // const userObject = { user, accessToken };
        return response_1.default.success(req, res, code_1.ResponseStatus.HTTP_CREATED, result.data.accessToken, "Successfully LoggedIn");
        // return response.success(req, res,result.status,result.data,result.message);
    }
    catch (error) {
        console.error("Error in login controller:", error);
        // return res.status(500).json({ error: "Internal server error" });
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "Login error");
    }
});
//   UserController.forgetPasswordController = async  (req: Request, res: Response)=> {
//     try { 
//       const result = await UserService.forgetPasswordService(req);
//       if (!result.success) {
//         return response.errors(req, res,result.status,result.message)
//       }
//       return response.success(req, res,result.status,null,result.message);
//     } catch (err) {
//       return response.errors(req, res,ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,"internal server error")  }
//   }
// UserController.resetPasswordController = async (req: Request, res: Response) =>{
//   try {
//     const result = await UserService.resetPasswordService(req);
//     return response.success(req, res,result.status,null,result.message);
//   } catch (err) {
//     return response.errors(req, res,ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,"internal server error")  }
// }
