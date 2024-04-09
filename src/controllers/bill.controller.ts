import { Request, Response } from "express";
// import billService from "../services/billService";
import response from "../responses/response";
import { ResponseStatus } from "../responseCode/code";
import billService from "../services/billService"
export default class billController {
    static add: any;
    static addQuantity: any

}

billController.add = async (req: Request, res: Response) => {
}

billController.addQuantity = async (req: Request, res: Response) => {
    try {
        const result = await billService.addQuantityService(req);

        return response.success(req, res, result.status, result.data, result.message);
    }
    catch (err) {
        return response.errors(req, res, ResponseStatus.HTTP_INTERNAL_SERVER_ERROR, "internal server error")

    }
};





