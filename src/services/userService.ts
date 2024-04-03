import { error } from "console";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/generateToken";
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
    const existingUser = await User.findOne({ where: { email: email } });
    console.log("existinguser");
    if (existingUser) {
      return { error: "Email already exists" };
    }
    console.log("eu", existingUser);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword", hashedPassword);
    const user = await User.create({
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
    const user = await User.findOne({ where: { userName: userName } });

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
