"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bill_controller_1 = __importDefault(require("../../controllers/bill.controller"));
const authentication_1 = require("../../middleware/authentication");
const express_1 = __importDefault(require("express"));
const billRoutes = express_1.default.Router();
const validators_1 = __importDefault(require("../../validators"));
billRoutes.get("/supplierName", authentication_1.Authenticate.verifyToken, bill_controller_1.default.supplierName);
billRoutes.get("/typeOfRawMaterials", bill_controller_1.default.typeOfRawMaterials);
billRoutes.get("/currency", bill_controller_1.default.currency);
billRoutes.post('/addqunatity', validators_1.default.bill.addQuantituValidation, bill_controller_1.default.addQuantity);
billRoutes.put('/editQuantity/:_id', validators_1.default.bill.editQuantituValidation, bill_controller_1.default.editQuantity);
billRoutes.delete('/deleteQuantity/:_id', bill_controller_1.default.deleteQuantity);
billRoutes.get('/poNumber', validators_1.default.bill.poNumberValidation, bill_controller_1.default.findPo);
exports.default = billRoutes;
