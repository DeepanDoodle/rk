import UserController from "../../controllers/user.controller";
import { Authenticate } from "../../middleware/authentication";
import validator from "../../validators";
import express from "express";

const userRoutes = express.Router();
userRoutes.post("/signup", UserController.signup);
userRoutes.post("/login", UserController.login);
userRoutes.post('/forgetPassword', validator.user.forgetPasswordValidation,UserController.forgetPasswordController);
userRoutes.post('/resetPassword',Authenticate.verifyToken,validator.user.resetPasswordValidation,UserController.resetPasswordController)


export default userRoutes;
