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
class Response {
    success(req_1, res_1, status_1) {
        return __awaiter(this, arguments, void 0, function* (req, res, status, data = null, message = 'success') {
            try {
                console.log('************************** Response');
                // if (status == ResponseStatus.HTTP_OK) {
                //   //req.appLogger.info(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Response :  ${JSON.stringify(data)}`)      
                // //   req.winstonLogger.logger.log('info', `Requesting ${req.method} ${req.originalUrl}`, { tags: `${req.originalUrl}`, additionalInfo: { body: req.body, responseTime: res.responseTime, status: status, message: message,UserId:data._id,headers: req.headers } });
                // } else {
                //  // req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : ${message}`)
                // //   req.winstonLogger.logger.log('info', `Requesting ${req.method} ${req.originalUrl}`, { tags: `${req.originalUrl}`, additionalInfo: { body: req.body, responseTime: res.responseTime, status: status, message: message,UserId: data._id, headers: req.headers } });
                // }
                return res.status(status).json({
                    status,
                    message,
                    data
                });
            }
            catch (error) {
                console.log('************************** Response success', error);
            }
        });
    }
    errors(req, res, status, message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //  req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : ${message}`)
                // req.winstonLogger.logger.log('error', `Requesting ${req.method} ${req.originalUrl}`, { tags: `${req.originalUrl}`, additionalInfo: { body: req.body, status: status, message: message, headers: req.headers } });
                //  res.set('Cache-control', 'no-cache', 'no-store')
                // res.header('X-Frame-Options', 'SAMEORIGIN')
                // res.removeHeader("X-Powered-By");
                return res.status(status).json({
                    status,
                    message
                });
            }
            catch (error) {
                console.log('************************** errors', error);
            }
        });
    }
}
// export = { Response };
exports.default = new Response();
// module.exports = new Response();
