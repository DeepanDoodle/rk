"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bill_controller_1 = __importDefault(require("../../controllers/bill.controller"));
const authentication_1 = require("../../middleware/authentication");
const express_1 = __importDefault(require("express"));
const billRoutes = express_1.default.Router();
billRoutes.get("/supplierName", authentication_1.Authenticate.verifyToken, bill_controller_1.default.supplierName);
billRoutes.get("/typeOfRawMaterials", bill_controller_1.default.typeOfRawMaterials);
billRoutes.get("/currency", bill_controller_1.default.currency);
exports.default = billRoutes;
