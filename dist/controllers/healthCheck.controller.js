"use strict";
// import { Request, Response, NextFunction } from "express";
// // import { messages } from "../../src/utils/messages";
// // import { errorLog } from "../utils/helpers";
// import { BaseController } from "./baseController"
// import userService from "../services/userService"
// class HealthCheck extends BaseController {
//     /**
//    * @description This is healthcheck Api
//    * @param req 
//    * @param res 
//    * @returns 
//    */
//   async healthCheck(req: Request, res: Response, next: NextFunction) {
//     try {
//        // #swagger.tags = ["HealthCheck"]
//       // #swagger.description = 'Endpoint para obter um usuário.'
//       return await this.success(req, res, this.status.HTTP_OK, "Healthcheck", "Healthcheck success");
//     } catch (e) {
//       console.log(" healthCheck controller error", e)
//       this.errors(req, res, this.status.HTTP_INTERNAL_SERVER_ERROR, this.exceptions.internalServerErr(req, e));
//       next(e);
//     }
//   }
//   async healthCheckData(req: Request, res: Response, next: NextFunction) {
//     try {
//       let data = await userService.addUser(req)
//       return this.success(req, res, this.status.HTTP_OK, data,"added");
//     } catch (e) {
//       console.log(" healthCheckData controller error", e)
//       this.errors(req, res, this.status.HTTP_INTERNAL_SERVER_ERROR, this.exceptions.internalServerErr(req, e));
//       next(e);
//     }
//   }
// }
// export default new HealthCheck();
