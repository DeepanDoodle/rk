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
const nodemailer_1 = __importDefault(require("nodemailer"));
const generateToken_1 = require("./generateToken");
function sendMail(email, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_ID || "",
                pass: process.env.APP_PASSWORD || "",
            },
        });
        const Token = (0, generateToken_1.generateAccessToken)(user_id);
        console.log("tk", Token);
        const mailOptions = {
            from: process.env.EMAIL_ID || "",
            to: email,
            subject: "reset password",
            text: `http://localhost:3000/resetPassword/${Token}`,
        };
        try {
            const info = yield transporter.sendMail(mailOptions);
            console.log("Email sent successfully:", info);
        }
        catch (error) {
            console.error("Error sending email:", error);
        }
    });
}
exports.default = sendMail;
