import joi, { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ExceptionErrors } from '../exceptions/handler';

class Validation {
  async registerValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      let schema: ObjectSchema;

      if (req.body.role && req.body.role.toLowerCase() === 'admin') {
        // Admin OR owner registration
        schema = joi.object({
          user_name: joi.string().required(),
          email_id: joi.string().email().required(),
          phone_number: joi.string().required(),
          password: joi.string().min(1).max(10).required(),
          role: joi.string().valid('admin').required(),
        }).unknown(true);
      } else {
        // User registration
        schema = joi.object({
          user_name: joi.string().required(),
          email_id: joi.string().email().required(),
          phone_number: joi.string().required(),
          password: joi.string().min(1).max(10).required(),
        });
      }

      await schema.validateAsync(req.body);

      next();
    } catch (err) {
      ExceptionErrors.Errorhandler(err, req, res, next);
    }
  }

  async loginValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const schema = joi.object({
        email_id: joi.string().email().required(),
        password: joi.string().min(1).max(10).required(),
      });

      await schema.validateAsync(req.body);

      next();
    } catch (err) {
      ExceptionErrors.Errorhandler(err, req, res, next);
    }
  }

  async forgetPasswordValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const schema = joi.object({
        email_id: joi.string().email().messages({ "string.email": "Invalid email" }).required(),
      });

      await schema.validateAsync(req.body);

      next();
    } catch (err) {
      ExceptionErrors.Errorhandler(err, req, res, next);
    }
  }

  async resetPasswordValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const schema = joi.object({
        password: joi.string().min(1).max(10).required(),
      });

      await schema.validateAsync(req.body);

      next();
    } catch (err) {
      ExceptionErrors.Errorhandler(err, req, res, next);
    }
  }
}

export default new Validation();
