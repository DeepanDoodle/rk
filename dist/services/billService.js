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
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../responseCode/code");
const codeMsg_1 = require("../config/codeMsg");
const index_1 = require("../models/index");
class billService {
}
exports.default = billService;
billService.add = () => __awaiter(void 0, void 0, void 0, function* () {
});
billService.addQuantityService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pkl_number, bale_number, quantity, remarks } = req.body;
        let result = yield index_1.vendor_quantity.create({ pkl_number: pkl_number, bale_number: bale_number, quantity: quantity, remarks: remarks });
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.Quantity,
            data: result,
        };
    }
    catch (e) {
        console.log(e);
    }
});
