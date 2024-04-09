import { error } from "console";
import { UserSession, chart_slacc, currency, mcat ,po} from "../models/index";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/generateToken";
import { ResponseStatus } from "../responseCode/code";
import { messages } from "../config/codeMsg";
import sendMail from "../utils/email";
import { vendor_quantity } from "../models/index";
import { where } from "sequelize";
export default class billService {
    static add: () => Promise<void>;
    static addQuantityService: (req: any) => Promise<any>;
    static addItemService: (req: any) => Promise<any>;
    static findPoService: (req: any) => Promise<any>;
 
  static supplierName: (id: any) => Promise<
    | {
        success: boolean;
        status: number;
        message: string;
        data: any;
        error?: undefined;
      }
    | {
        error: Error;
        success?: undefined;
        status?: undefined;
        message?: undefined;
        data?: undefined;
      }
  >;
  static typeOfRawMaterials: () => Promise<
    | { success: boolean; status: number; message: string; data: any }
    | { success: boolean; status: number; message: string; data?: undefined }
  >;
    static currency: () => Promise<{ success: boolean; status: number; message: string; data: (string | null | undefined)[]; } | { success: boolean; status: number; message: string; data?: undefined; }>;
    static editQuantityService: (req: any) => Promise<any>;
    static deleteQuantityService: (req: any) => Promise<any>;
}

billService.add = async (
 
) => {

};

billService.addQuantityService= async(req:any):Promise<any> =>{
    try{

        const {pkl_number,bale_number,quantity,remarks}=req.body

        let result = await vendor_quantity.create({pkl_number:pkl_number,bale_number:bale_number,quantity:quantity,remarks:remarks})
        return {
            success: true,
            status: ResponseStatus.HTTP_OK,
            message: messages.Quantity,
            data:result,
          };

    }
    catch(e){
        console.log(e);
    }
}
billService.editQuantityService= async(req:any):Promise<any> =>{
    try{
        const id=req?.params

        const findid =await vendor_quantity.findOne({where:{_id:id}})
        if(!findid){
            return{
                success:false,
                status:ResponseStatus.HTTP_BAD_REQUEST,
                messages:messages.notfound
            }
        }

        const obj={
            pkl_number:req.body||findid?.dataValues.pkl_number,
            bale_number:req.body||findid?.dataValues.bale_number,
            quantity:req.body||findid?.dataValues.bale_number,
            remarks:req.body||findid?.dataValues.bale_number
        }
       

        // const {pkl_number,bale_number,quantity,remarks}=req.body
        const result = await vendor_quantity.update(obj, { where: { _id: id } });
        return {
            success: true,
            status: ResponseStatus.HTTP_OK,
            message: messages.updated,
            data:result,
          };

    }
    catch(e){
        console.log(e);
    }
}
billService.deleteQuantityService= async(req:any):Promise<any> =>{
    try{
        const id=req?.params

        const findid =await vendor_quantity.findOne({where:{_id:id}})
        if(!findid){
            return{
                success:false,
                status:ResponseStatus.HTTP_BAD_REQUEST,
                messages:messages.notfound
            }
        }

        let result =await vendor_quantity.destroy({where:{_id:id}})


        return {
            success: true,
            status: ResponseStatus.HTTP_OK,
            message: messages.deleted,
            data:result,
          };

    }
    catch(e){
        console.log(e);
    }
}
billService.addItemService= async(req:any):Promise<any> =>{
    try{

        const {pkl_number,bale_number,quantity,remarks}=req.body

        let result = await vendor_quantity.create({pkl_number:pkl_number,bale_number:bale_number,quantity:quantity,remarks:remarks})
        return {
            success: true,
            status: ResponseStatus.HTTP_OK,
            message: messages.Quantity,
            data:result,
          };

    }
    catch(e){
        console.log(e);
    }
}
billService.findPoService=async(req:any):Promise<any>=>{
    try{
        const{type_of_raw_material}=req.body

        const MCATCODE =await (mcat as any).findOne({where:{MCATDESC:type_of_raw_material}})

        console.log(MCATCODE,"..................")

        const result =await po.findOne({where:{	POTYPE:MCATCODE}})
        return {
            success: true,
            status: ResponseStatus.HTTP_OK,
            message: messages.pofetched,
            data:result,
          };

    }
    catch(e){
        console.log(e);
    }
}


billService.supplierName = async (id) => {
  try {
    const user = await (chart_slacc as any).findOne({
      where: { SUBL_CODE: id },
    });
    return {
      success: true,
      status: ResponseStatus.HTTP_OK,
      message: messages.dataFetched,
      data: user.dataValues.SUBL_NAME,
    };
  } catch (e) {
    return {
      success: false,
      status: ResponseStatus.HTTP_BAD_GATEWAY,
      message: messages.noRecord,
    };
  }
};

billService.typeOfRawMaterials = async () => {
  try {
    const itemObject = await (mcat as any).findAll({
      attributes: ["MCATDESC"],
    });
    const materials = itemObject.map((record: any) => record.MCATDESC);
    return {
      success: true,
      status: ResponseStatus.HTTP_OK,
      message: messages.dataFetched,
      data: materials,
    };
  } catch (e) {
    return {
      success: false,
      status: ResponseStatus.HTTP_BAD_GATEWAY,
      message: messages.noRecord,
    };
  }
};

billService.currency = async () => {
  try {
    const records = await currency.findAll({
      attributes: ["FST_NAME"],
    });

    const currencies = records.map((record) => record.FST_NAME);

    return {
      success: true,
      status: ResponseStatus.HTTP_OK,
      message: messages.dataFetched,
      data: currencies,
    };
  } catch (e) {
    return {
      success: false,
      status: ResponseStatus.HTTP_BAD_GATEWAY,
      message: messages.noRecord,
    };
  }
};
