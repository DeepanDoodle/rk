import { error } from "console";
import { user } from "../models/user";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/generateToken";
import { ResponseStatus } from "../responseCode/code";
import { messages } from "../config/codeMsg";
import sendMail from "../utils/email";
export default class UserService {
  static forgetPasswordService: (req: any) => Promise<any>;
  static resetPasswordService: (req: any) => Promise<any>;
  static login: (
    userName: string,
    password: string
  ) => Promise<
    | { error: string; user_found?: undefined; accessToken?: undefined }
    | { user_found: any; accessToken: string; error?: undefined }
  >;
  static signup: (
    userName: string,
    vendorName: string,
    email: string,
    password: string
  ) => Promise<
    | { error: string; usercreated?: undefined }
    | { usercreated: any; error?: undefined }
    | { error: Error; usercreated?: undefined }
  >;
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
    const existingUser = await (user as any).findOne({
      where: { email: email },
    });
    console.log("existinguser");
    if (existingUser) {
      return { error: "Email already exists" };
    }
    console.log("eu", existingUser);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword", hashedPassword);
    const usercreated = await (user as any).create({
      userName: userName,
      vendorName: vendorName,
      email: email,
      password: hashedPassword,
    });
    console.log("userservice", user);
    return { usercreated };
  } catch (err) {
    return { error: err as unknown as Error };
  }
};

UserService.login = async (userName: string, password: string) => {
  try {
    const user_found = await (user as any).findOne({
      where: { userName: userName },
    });

    if (!user_found) {
      return { error: "User not found" };
    }

    const passwordMatch = await bcrypt.compare(password, user_found.password);

    if (!passwordMatch) {
      return { error: "Invalid password" };
    }

    const accessToken = generateAccessToken(user_found.id);

    return { user_found, accessToken };
  } catch (error) {
    return { error: (error as Error).message };
  }
};

UserService.forgetPasswordService = async (req: any): Promise<any> => {
  try {
    const { email_id } = req.body;

    const isUserExist = await (user as any).findOne({
      where: { email: email_id },
    });
    console.log(isUserExist);
    if (!isUserExist) {
      return {
        success: false,
        status: ResponseStatus.HTTP_BAD_GATEWAY,
        message: messages.notRegistered,
      };
    }

    const user_id: number = isUserExist.id;

    await sendMail(email_id, user_id);

    return {
      success: true,
      status: ResponseStatus.HTTP_OK,
      message: messages.linksendMessageEmail,
    };
  } catch (e) {
    console.log(e);
  }
};

UserService.resetPasswordService = async (req: any): Promise<any> => {
  try {
    const id = req?.id;

    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const update_password = await (user as any).update(
      { password: hashedPassword },
      { where: { id: id } }
    );

    return {
      success: true,
      status: ResponseStatus.HTTP_OK,
      message: messages.resetPassword,
    };
  } catch (e) {
    console.log(e);
  }
};
