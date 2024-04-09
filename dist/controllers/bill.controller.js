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
// import billService from "../services/billService";
const response_1 = __importDefault(require("../responses/response"));
const code_1 = require("../responseCode/code");
const billService_1 = __importDefault(require("../services/billService"));
class billController {
}
exports.default = billController;
billController.add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
billController.addQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield billService_1.default.addQuantityService(req);
        return response_1.default.success(req, res, result.status, result.data, result.message);
    }
    catch (err) {
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "internal server error");
    }
});
