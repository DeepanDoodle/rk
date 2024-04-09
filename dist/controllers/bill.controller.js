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
billController.supplierName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.id;
        console.log("id", id);
        const result = yield billService_1.default.supplierName(id);
        if (!result.success) {
            return response_1.default.errors(req, res, result.status, result.message);
        }
        return response_1.default.success(req, res, result.status, result.data, result.message);
    }
    catch (error) {
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "SupplierName error");
    }
});
billController.typeOfRawMaterials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield billService_1.default.typeOfRawMaterials();
        if (!result.success) {
            return response_1.default.errors(req, res, result.status, result.message);
        }
        return response_1.default.success(req, res, result.status, result.data, result.message);
    }
    catch (error) {
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "Type Of Raw Materials error");
    }
});
billController.currency = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield billService_1.default.currency();
        if (!result.success) {
            return response_1.default.errors(req, res, result.status, result.message);
        }
        return response_1.default.success(req, res, result.status, result.data, result.message);
    }
    catch (error) {
        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "Currency error");
    }
});
