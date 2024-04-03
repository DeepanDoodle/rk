import { error } from "console";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/generateToken";
import { ResponseStatus } from "../responseCode/code";
import { messages } from "../config/codeMsg";
import sendMail from "../utils/email";
export default class UserService {
  static signup: (
    userName: string,
    vendorName: string,
    email: string,
    password: string
  ) => Promise<
    { user: User; error?: undefined } | { error: any; user?: undefined }
  >;
  static login: (
    userName: string,
    password: string
  ) => Promise<
    | { error: string; user?: undefined; accessToken?: undefined }
    | { user: User; accessToken: string; error?: undefined }
  >;
  static forgetPasswordService: (req: any) => Promise<any>;
  static resetPasswordService: (req: any) => Promise<any>;
}

UserService.signup = async (
  userName: string,
  vendorName: string,
  email: string,
  password: string
) => {
  try {
    console.log(userName, vendorName, email, password);
    console.log("inside try");
    const existingUser = await (User as any).findOne({ where: { email: email } });
    console.log("existinguser");
    if (existingUser) {
      return { error: "Email already exists" };
    }
    console.log("eu", existingUser);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword", hashedPassword);
    const user = await (User as any).create({
      userName: userName,
      vendorName: vendorName,
      email: email,
      password: hashedPassword,
    });
    console.log("userservice", user);
    return { user };
  } catch (err) {
    return { error: err as unknown as Error };
  }
};

UserService.login = async (userName: string, password: string) => {
  try {
    const user = await (User as any).findOne({ where: { userName: userName } });

    if (!user) {
      return { error: "User not found" };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { error: "Invalid password" };
    }

    const accessToken = generateAccessToken(user.id);

    return { user, accessToken };
  } catch (error) {
    return { error: (error as Error).message };
  }
};

UserService.forgetPasswordService = async (req: any): Promise<any>=> {
  try {
    const { email_id } = req.body;

    const isUserExist = await (User as any).findOne({ where:{email:  email_id  }});
    console.log(isUserExist)
    if (!isUserExist) {
      return {
        success: false,
        status: ResponseStatus.HTTP_BAD_GATEWAY,
        message:messages.notRegistered ,
      };
    }

    const user_id :number= isUserExist.id; 

    await sendMail(email_id, user_id);

    return {
      success: true,
      status: ResponseStatus.HTTP_OK,
      message:messages.linksendMessageEmail,
    };
  } catch (e) {
    console.log(e);
  }
}

UserService.resetPasswordService =  async (req: any): Promise<any>=> {
  try {

    const id = req?.id

    const{password}=req.body
    const hashedPassword = await bcrypt.hash(password,10)

    const update_password = await (User as any).update(
      { password: hashedPassword }, 
      { where: { id: id } } 
    );
      
    return {
      success: true,
      status: ResponseStatus.HTTP_OK,
      message:messages.resetPassword,
    };
  } catch (e) {
    console.log(e);
  }
}
