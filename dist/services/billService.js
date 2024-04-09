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
const index_1 = require("../models/index");
const code_1 = require("../responseCode/code");
const codeMsg_1 = require("../config/codeMsg");
const index_2 = require("../models/index");
class billService {
}
exports.default = billService;
billService.add = () => __awaiter(void 0, void 0, void 0, function* () {
});
billService.addQuantityService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pkl_number, bale_number, quantity, remarks } = req.body;
        let result = yield index_2.vendor_quantity.create({ pkl_number: pkl_number, bale_number: bale_number, quantity: quantity, remarks: remarks });
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
billService.editQuantityService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req === null || req === void 0 ? void 0 : req.params;
        const findid = yield index_2.vendor_quantity.findOne({ where: { _id: id } });
        if (!findid) {
            return {
                success: false,
                status: code_1.ResponseStatus.HTTP_BAD_REQUEST,
                messages: codeMsg_1.messages.notfound
            };
        }
        const obj = {
            pkl_number: req.body || (findid === null || findid === void 0 ? void 0 : findid.dataValues.pkl_number),
            bale_number: req.body || (findid === null || findid === void 0 ? void 0 : findid.dataValues.bale_number),
            quantity: req.body || (findid === null || findid === void 0 ? void 0 : findid.dataValues.bale_number),
            remarks: req.body || (findid === null || findid === void 0 ? void 0 : findid.dataValues.bale_number)
        };
        // const {pkl_number,bale_number,quantity,remarks}=req.body
        const result = yield index_2.vendor_quantity.update(obj, { where: { _id: id } });
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.updated,
            data: result,
        };
    }
    catch (e) {
        console.log(e);
    }
});
billService.deleteQuantityService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req === null || req === void 0 ? void 0 : req.params;
        const findid = yield index_2.vendor_quantity.findOne({ where: { _id: id } });
        if (!findid) {
            return {
                success: false,
                status: code_1.ResponseStatus.HTTP_BAD_REQUEST,
                messages: codeMsg_1.messages.notfound
            };
        }
        let result = yield index_2.vendor_quantity.destroy({ where: { _id: id } });
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.deleted,
            data: result,
        };
    }
    catch (e) {
        console.log(e);
    }
});
billService.addItemService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pkl_number, bale_number, quantity, remarks } = req.body;
        let result = yield index_2.vendor_quantity.create({ pkl_number: pkl_number, bale_number: bale_number, quantity: quantity, remarks: remarks });
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
billService.findPoService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type_of_raw_material } = req.body;
        const MCATCODE = yield index_1.mcat.findOne({ where: { MCATDESC: type_of_raw_material } });
        console.log(MCATCODE, "..................");
        const result = yield index_1.po.findOne({ where: { POTYPE: MCATCODE } });
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.pofetched,
            data: result,
        };
    }
    catch (e) {
        console.log(e);
    }
});
billService.supplierName = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield index_1.chart_slacc.findOne({
            where: { SUBL_CODE: id },
        });
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.dataFetched,
            data: user.dataValues.SUBL_NAME,
        };
    }
    catch (e) {
        return {
            success: false,
            status: code_1.ResponseStatus.HTTP_BAD_GATEWAY,
            message: codeMsg_1.messages.noRecord,
        };
    }
});
billService.typeOfRawMaterials = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemObject = yield index_1.mcat.findAll({
            attributes: ["MCATDESC"],
        });
        const materials = itemObject.map((record) => record.MCATDESC);
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.dataFetched,
            data: materials,
        };
    }
    catch (e) {
        return {
            success: false,
            status: code_1.ResponseStatus.HTTP_BAD_GATEWAY,
            message: codeMsg_1.messages.noRecord,
        };
    }
});
billService.currency = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const records = yield index_1.currency.findAll({
            attributes: ["FST_NAME"],
        });
        const currencies = records.map((record) => record.FST_NAME);
        return {
            success: true,
            status: code_1.ResponseStatus.HTTP_OK,
            message: codeMsg_1.messages.dataFetched,
            data: currencies,
        };
    }
    catch (e) {
        return {
            success: false,
            status: code_1.ResponseStatus.HTTP_BAD_GATEWAY,
            message: codeMsg_1.messages.noRecord,
        };
    }
});
