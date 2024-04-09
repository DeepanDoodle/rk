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
    addQuantituValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    pkl_number: joi_1.default.number().required(),
                    bale_number: joi_1.default.number().required(),
                    quantity: joi_1.default.number().required(),
                    remarks: joi_1.default.string().required(),
                    vendor_item_id: joi_1.default.string().optional(),
                    bill_id: joi_1.default.string().optional(),
                    barcode: joi_1.default.string().optional()
                });
                yield schema.validateAsync(req.body);
                next();
            }
            catch (err) {
                handler_1.ExceptionErrors.Errorhandler(err, req, res, next);
            }
        });
    }
    editQuantituValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    pkl_number: joi_1.default.number().optional(),
                    bale_number: joi_1.default.number().optional(),
                    quantity: joi_1.default.number().optional(),
                    remarks: joi_1.default.string().optional(),
                    vendor_item_id: joi_1.default.string().optional(),
                    bill_id: joi_1.default.string().optional(),
                    barcode: joi_1.default.string().optional()
                });
                yield schema.validateAsync(req.body);
                next();
            }
            catch (err) {
                handler_1.ExceptionErrors.Errorhandler(err, req, res, next);
            }
        });
    }
    poNumberValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    type_of_raw_material: joi_1.default.string().required()
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
