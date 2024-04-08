import {Request , Response} from "express";
import UserService from "../services/userService";
import response from "../responses/response";
import { ResponseStatus } from "../responseCode/code";
export default class UserController {
  static signup: (req: Request, res: Response) => Promise<any>;
  static login: (req: Request, res: Response) => Promise<any>;
  static forgetPasswordController: (req: Request, res: Response) => Promise<any>;
  static resetPasswordController: (req: Request, res: Response) => Promise<any>;
}

UserController.signup = async (req: Request, res: Response) => {
  let { userName, vendorName, email, password } = req.body;
  console.log(userName, vendorName, email, password);
  try {
    const result = await UserService.signup(
      userName,
      vendorName,
      email,
      password
    );
    if (result.error) {
      return response.errors(
        req,
        res,
        ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
        "Signup error"
      );
    }
    console.log(result);
    console.log("user", result.user);
    return response.success(
      req,
      res,
      ResponseStatus.HTTP_CREATED,
      result.user,
      "User created"
    );
  } catch (error) {
    return response.errors(
      req,
      res,
      ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
      "Signup error"
    );
  }
};

UserController.login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;
console.log(userName)
  try {
    const result = await UserService.login(userName, password);
    if (!result.success) {
      return response.errors(req, res,result.status,result.message)
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
    return response.success(
      req,
      res,
      ResponseStatus.HTTP_CREATED,
      userObject,
      "Successfully LoggedIn"
    );
    // return response.success(req, res,result.status,result.data,result.message);

  } catch (error) {
    console.error("Error in login controller:", error);
    // return res.status(500).json({ error: "Internal server error" });
    return response.errors(
      req,
      res,
      ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
      "Login error"
    );
  }
}

  UserController.forgetPasswordController = async  (req: Request, res: Response)=> {
    try { 
      const result = await UserService.forgetPasswordService(req);
  
      if (!result.success) {
        return response.errors(req, res,result.status,result.message)
      }
      return response.success(req, res,result.status,null,result.message);
    } catch (err) {
      return response.errors(req, res,ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,"internal server error")  }
  }

UserController.resetPasswordController = async (req: Request, res: Response) =>{
  try {
    const result = await UserService.resetPasswordService(req);
    return response.success(req, res,result.status,null,result.message);
  } catch (err) {
    return response.errors(req, res,ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,"internal server error")  }
}




