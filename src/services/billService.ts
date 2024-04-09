import { error } from "console";
import { UserSession, User, chart_slacc ,po} from "../models/index";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/generateToken";
import { ResponseStatus } from "../responseCode/code";
import { messages } from "../config/codeMsg";
import sendMail from "../utils/email";
import { vendor_quantity } from "../models/index";
export default class billService {
    static add: () => Promise<void>;
    static addQuantityService: (req: any) => Promise<any>;
    static addItemService: (req: any) => Promise<any>;
    static findPoService: (req: any) => Promise<any>;
 
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

        const supplier_code =await chart_slacc.findOne({where:{SUBL_CODE:supplier_name}})

        const result =await po.findOne({where:{SUPCODE:supplier_code}})

    }
    catch(e){
        console.log(e);
    }
}


