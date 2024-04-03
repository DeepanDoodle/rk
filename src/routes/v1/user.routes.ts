import UserController from "../../controllers/user.controller";

const express = require("express");
const userRoutes = express.Router();
userRoutes.post("/signup", UserController.signup);
userRoutes.post("/login", UserController.login);

export default userRoutes;
