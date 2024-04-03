"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionErrors = void 0;
const joi_1 = require("joi");
const code_1 = require("../responseCode/code");
class ExceptionErrors extends Error {
    constructor() {
        super();
    }
    static internalServerErr(req, err) {
        //req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : ${err.message}`);
        // req.winstonLogger.logger.log('error', `Requesting ${req.method} ${req.originalUrl}`, { tags: `${req.originalUrl}`, additionalInfo: { body: err.message, headers: req.headers } });
        return 'Something went wrong. Please try again ' + err.message;
    }
    static unableToProcess(req) {
        // req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : unable to process request`);
        // req.winstonLogger.logger.log('error', `Requesting ${req.method} ${req.originalUrl}`, { tags: `${req.originalUrl}`, additionalInfo: { body: ' Error : unable to process request', headers: req.headers } });
        return 'unable to process request';
    }
    static Errorhandler(err, req, res, next) {
        if (err instanceof joi_1.ValidationError) {
            res.status(code_1.ResponseStatus.HTTP_BAD_REQUEST).json({ error: 'validation error', details: err.details[0].message });
        }
        else {
            console.log(err);
            res.status(code_1.ResponseStatus.HTTP_INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
        }
    }
}
exports.ExceptionErrors = ExceptionErrors;
