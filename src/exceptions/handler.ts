import { Request, Response, NextFunction } from 'express';
import joi, { ValidationError } from 'joi';
import {ResponseStatus} from '../responseCode/code'

export class ExceptionErrors extends Error {
    constructor() {
        super()
    }

    static internalServerErr(req: any, err: any) {
        //req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : ${err.message}`);
        // req.winstonLogger.logger.log('error', `Requesting ${req.method} ${req.originalUrl}`, { tags: `${req.originalUrl}`, additionalInfo: { body: err.message, headers: req.headers } });
        return 'Something went wrong. Please try again ' + err.message
    }

    static unableToProcess(req: any) {
       // req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : unable to process request`);
        // req.winstonLogger.logger.log('error', `Requesting ${req.method} ${req.originalUrl}`, { tags: `${req.originalUrl}`, additionalInfo: { body: ' Error : unable to process request', headers: req.headers } });
        return 'unable to process request'
    }
    static Errorhandler(err: any, req: Request, res: Response, next: NextFunction): void {
        if (err instanceof ValidationError) {
            res.status(ResponseStatus.HTTP_BAD_REQUEST).json({ error: 'validation error', details: err.details[0].message });
        } else {
            console.log(err);
            res.status(ResponseStatus.HTTP_INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
        }
    }

    // static paymentFailed(req) {
    //    // req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : Payment Failed: Amount due`);
    //     req.winstonLogger.logger.log('error', `Requesting ${req.method} ${req.originalUrl}`, { tags: `${req.originalUrl}`, additionalInfo: { body: 'Error : Payment Failed: Amount due', headers: req.headers } });
    //     return 'Payment Failed: Amount due'
    // }
}