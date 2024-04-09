import { Request, Response } from "express";
// import billService from "../services/billService";
import response from "../responses/response";
import { ResponseStatus } from "../responseCode/code";
import billService from "../services/billService"
export default class billController {
  static supplierName: any;
  static typeOfRawMaterials: any;
    static addQuantity: any
static currency: any;
    static findPo: any;
    static editQuantity: any;
    static deleteQuantity: any;
}

billController.supplierName = async (req: any, res: Response) => {
  try {
    const id = req.id;
    console.log("id", id);
    const result = await billService.supplierName(id);

    if (!result.success) {
      return response.errors(req, res, result.status, result.message);
    }

    return response.success(
      req,
      res,
      result.status,
      result.data,
      result.message
    );
  } catch (error) {
    return response.errors(
      req,
      res,
      ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
      "SupplierName error"
    );
  }
};

billController.typeOfRawMaterials = async(req:Request, res:Response)=>{
  try {
    
    const result = await billService.typeOfRawMaterials();

    if (!result.success) {
      return response.errors(req, res, result.status, result.message);
    }

    return response.success(
      req,
      res,
      result.status,
      result.data,
      result.message
    );
  } catch (error) {
    return response.errors(
      req,
      res,
      ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
      "Type Of Raw Materials error"
    );
  }
}

billController.currency = async(req:Request, res:Response)=>{
  try {
    
    const result = await billService.currency();

    if (!result.success) {
      return response.errors(req, res, result.status, result.message);
    }

    return response.success(
      req,
      res,
      result.status,
      result.data,
      result.message
    );
  } catch (error) {
    return response.errors(
      req,
      res,
      ResponseStatus.HTTP_INTERNAL_SERVER_ERROR,
      "Currency error"
    );
  }
}
// billController.add = async (req: Request, res: Response) => {
// }

billController.addQuantity = async (req: Request, res: Response) => {
    try {
        const result = await billService.addQuantityService(req);

        return response.success(req, res, result.status, result.data, result.message);
    }
    catch (err) {
        return response.errors(req, res, ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "internal server error")

    }
};
billController.editQuantity = async (req: Request, res: Response) => {
    try {
        const result = await billService.editQuantityService(req);
        if(!result.success){
            return response.errors(req,res,result.status,result.message)
        }

        return response.success(req, res, result.status, null, result.message);
    }
    catch (err) {
        return response.errors(req, res, ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "internal server error")

    }
};
billController.deleteQuantity = async (req: Request, res: Response) => {
    try {
        const result = await billService.deleteQuantityService(req);
        if(!result.success){
            return response.errors(req,res,result.status,result.message)
        }

        return response.success(req, res, result.status, null, result.message);
    }
    catch (err) {
        return response.errors(req, res, ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "internal server error")

    }
};
billController.findPo = async (req: Request, res: Response) => {
    try {
        const result = await billService.findPoService(req);

        return response.success(req, res, result.status, result.data, result.message);
    }
    catch (err) {
        return response.errors(req, res, ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "internal server error")

    }
};





