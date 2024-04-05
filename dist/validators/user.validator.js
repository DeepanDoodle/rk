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
const joi_1 = __importDefault(require("joi"));
const handler_1 = require("../exceptions/handler");
class Validation {
    registerValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let schema;
                if (req.body.role && req.body.role.toLowerCase() === 'admin') {
                    // Admin OR owner registration
                    schema = joi_1.default.object({
                        user_name: joi_1.default.string().required(),
                        email_id: joi_1.default.string().email().required(),
                        phone_number: joi_1.default.string().required(),
                        password: joi_1.default.string().min(1).max(10).required(),
                        role: joi_1.default.string().valid('admin').required(),
                    }).unknown(true);
                }
                else {
                    // User registration
                    schema = joi_1.default.object({
                        user_name: joi_1.default.string().required(),
                        email_id: joi_1.default.string().email().required(),
                        phone_number: joi_1.default.string().required(),
                        password: joi_1.default.string().min(1).max(10).required(),
                    });
                }
                yield schema.validateAsync(req.body);
                next();
            }
            catch (err) {
                handler_1.ExceptionErrors.Errorhandler(err, req, res, next);
            }
        });
    }
    loginValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    userName: joi_1.default.string().required(),
                    password: joi_1.default.string().required(),
                });
                yield schema.validateAsync(req.body);
                next();
            }
            catch (err) {
                handler_1.ExceptionErrors.Errorhandler(err, req, res, next);
            }
        });
    }
    forgetPasswordValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    email_id: joi_1.default.string().email().messages({ "string.email": "Invalid email" }).required(),
                });
                yield schema.validateAsync(req.body);
                next();
            }
            catch (err) {
                handler_1.ExceptionErrors.Errorhandler(err, req, res, next);
            }
        });
    }
    resetPasswordValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    password: joi_1.default.string().min(1).max(10).required(),
                });
                yield schema.validateAsync(req.body);
                next();
            }
            catch (err) {
                handler_1.ExceptionErrors.Errorhandler(err, req, res, next);
            }
        });
    }
}
exports.default = new Validation();
