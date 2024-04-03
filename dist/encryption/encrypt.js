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
//Import files
const reqrescrypt_1 = __importDefault(require("./reqrescrypt"));
const response_1 = __importDefault(require("../responses/response"));
const code_1 = require("../responseCode/code");
class Encryption {
    //Decrypt the request
    decryptReq(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Body type
                if (req.body && Object.keys(req.body).length) {
                    // if req body is not string error will be returned
                    if (typeof req.body !== "string") { // && !parseInt(encDec || 0)
                        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, code_1.ResponseStatus.$statusTexts[415]);
                    }
                    const data = yield reqrescrypt_1.default.requestDecryption(req.body);
                    req.body = JSON.parse(data);
                    if (!req.body) {
                        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, code_1.ResponseStatus.$statusTexts[415]);
                    }
                    return req.body;
                    // else if (typeof req.body === "string")
                }
                //Query
                if (req.query && req.query.request) {
                    const data = yield reqrescrypt_1.default.requestDecryption(req.query.request);
                    if (!data) {
                        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, code_1.ResponseStatus.$statusTexts[415]);
                    }
                    else {
                        req.query = JSON.parse(data); // url string to json conversion
                        return req.query;
                    }
                }
            }
            catch (e) {
                return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, code_1.ResponseStatus.$statusTexts[415]);
                // errorLog(e, "====> Error in requestDecryption");
            }
        });
    }
    //Encrypt the response
    encryptRes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // if true encrypeted response will be sent.
                let sendEncryptedResponse = res.send;
                return res.send = function (data) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let body = yield reqrescrypt_1.default.responseEncryption(data); // Result a string of letters and numbers
                        sendEncryptedResponse.apply(this, [body]);
                    });
                };
            }
            catch (e) {
                return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, code_1.ResponseStatus.$statusTexts[415]);
                // errorLog(e, "====> Error in requestDecryption");
            }
        });
    }
    checkForEncryption(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body && req.query) {
                    if (typeof req.body === "string" || typeof req.query.request === "string")
                        return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, code_1.ResponseStatus.$statusTexts[415]);
                }
            }
            catch (e) {
                return response_1.default.errors(req, res, code_1.ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, code_1.ResponseStatus.$statusTexts[415]);
                // errorLog(e, "====> Error in requestDecryption");
            }
        });
    }
}
exports.default = new Encryption();
