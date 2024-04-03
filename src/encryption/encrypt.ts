import { Request, Response, NextFunction, } from "express";

//Import files
import ReqResEncrypt from "./reqrescrypt";
import MsgResponse from "../responses/response"
import { ResponseStatus } from "../responseCode/code"

class Encryption {

    //Decrypt the request
    async decryptReq(req: Request, res: any) {

        try {

            //Body type
            if (req.body && Object.keys(req.body).length) {

                // if req body is not string error will be returned
                if (typeof req.body !== "string") { // && !parseInt(encDec || 0)
                    return MsgResponse.errors(req, res, ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, ResponseStatus.$statusTexts[415]);
                }
                const data: any = await ReqResEncrypt.requestDecryption(req.body);
                req.body = JSON.parse(data);
                if (!req.body) {
                    return MsgResponse.errors(req, res, ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, ResponseStatus.$statusTexts[415]);
                }
                return req.body
                // else if (typeof req.body === "string")
            }

            //Query
            if (req.query && req.query.request) {

                const data: any = await ReqResEncrypt.requestDecryption(req.query.request);

                if (!data) {
                    return MsgResponse.errors(req, res, ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, ResponseStatus.$statusTexts[415]);
                } else {
                    req.query = JSON.parse(data); // url string to json conversion
                    return req.query
                }
            }

        } catch (e) {
            return MsgResponse.errors(req, res, ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, ResponseStatus.$statusTexts[415])
            // errorLog(e, "====> Error in requestDecryption");
        }
    }


    //Encrypt the response
    async encryptRes(req: Request, res: any) {
        try {

            // if true encrypeted response will be sent.
            let sendEncryptedResponse = res.send;
            return res.send = async function (data: any) {
                let body = await ReqResEncrypt.responseEncryption(data); // Result a string of letters and numbers
                sendEncryptedResponse.apply(this, [body]);
            };
        } catch (e) {
            return MsgResponse.errors(req, res, ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, ResponseStatus.$statusTexts[415])
            // errorLog(e, "====> Error in requestDecryption");
        }
    }

    async checkForEncryption(req: Request, res: any) {
        try {

            if (req.body && req.query) {
                if (typeof req.body === "string" || typeof req.query.request === "string")
                    return MsgResponse.errors(req, res, ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, ResponseStatus.$statusTexts[415])
            }


        } catch (e) {
            return MsgResponse.errors(req, res, ResponseStatus.HTTP_UNSUPPORTED_MEDIA_TYPE, ResponseStatus.$statusTexts[415])
            // errorLog(e, "====> Error in requestDecryption");
        }
    }

}

export default new Encryption();