import joi, { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ExceptionErrors } from '../exceptions/handler';

class Validation {
    async addQuantituValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
          const schema = joi.object({
            pkl_number: joi.number().required(),
            bale_number: joi.number().required(),
            quantity:joi.number().required(),
            remarks:joi.string().required(),
            vendor_item_id:joi.string().optional(),
            bill_id:joi.string().optional(),
            barcode:joi.string().optional()

          });
    
          await schema.validateAsync(req.body);
    
          next();
        } catch (err) {
          ExceptionErrors.Errorhandler(err, req, res, next);
        }
      }
      async editQuantituValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
          const schema = joi.object({
            pkl_number: joi.number().optional(),
            bale_number: joi.number().optional(),
            quantity:joi.number().optional(),
            remarks:joi.string().optional(),
            vendor_item_id:joi.string().optional(),
            bill_id:joi.string().optional(),
            barcode:joi.string().optional()

          });
    
          await schema.validateAsync(req.body);
    
          next();
        } catch (err) {
          ExceptionErrors.Errorhandler(err, req, res, next);
        }
      }
      async poNumberValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
          const schema = joi.object({
            type_of_raw_material:joi.string().required()
          });
    
          await schema.validateAsync(req.body);
    
          next();
        } catch (err) {
          ExceptionErrors.Errorhandler(err, req, res, next);
        }
      }
    }
    export default new Validation();
