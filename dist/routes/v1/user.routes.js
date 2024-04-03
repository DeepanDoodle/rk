"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const express = require("express");
const userRoutes = express.Router();
userRoutes.post("/signup", user_controller_1.default.signup);
userRoutes.post("/login", user_controller_1.default.login);
exports.default = userRoutes;
