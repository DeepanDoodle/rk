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
const crypto_1 = __importDefault(require("crypto"));
let ALGORITHM_TYPE = 'aes-256-cbc';
let ENCRYPTION_KEY = 'ZyRgRE87pA0tNE6GnNRPAThqTkwb02xl';
let IV = 'kEB1IYLeTOGJA0Rq';
class ReqResEncrypt {
    constructor() {
        /**
    * Decryption for all incoming requests
    */
        this.requestDecryption = (text) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    let encryptedText = Buffer.from(text, 'hex');
                    const decipher = crypto_1.default.createDecipheriv(ALGORITHM_TYPE, Buffer.from(ENCRYPTION_KEY), IV);
                    let decrypted = decipher.update(encryptedText);
                    decrypted = Buffer.concat([decrypted, decipher.final()]);
                    return resolve(decrypted.toString());
                }
                catch (error) {
                    // errorLog("requestDecryption", error)
                    return reject(error);
                }
            });
        });
        /**
        * Encryption for all processed responses
        */
        this.responseEncryption = (text) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    let cipher = crypto_1.default.createCipheriv(ALGORITHM_TYPE, Buffer.from(ENCRYPTION_KEY), IV);
                    let encrypted = cipher.update(text);
                    encrypted = Buffer.concat([encrypted, cipher.final()]);
                    return resolve(encrypted.toString('hex'));
                }
                catch (error) {
                    //   errorLog("responseEncryption", error)
                    return reject(error);
                }
            });
        });
    }
}
exports.default = new ReqResEncrypt();
