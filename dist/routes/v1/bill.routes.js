"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const billRoutes = express_1.default.Router();
const bill_controller_1 = __importDefault(require("../../controllers/bill.controller"));
const validators_1 = __importDefault(require("../../validators"));
// billRoutes.post("/add_bill",billController.add);
billRoutes.post('/addqunatity', validators_1.default.bill.addQuantituValidation, bill_controller_1.default.addQuantity);
exports.default = billRoutes;
