import { error } from "console";
import { UserSession, chart_slacc, currency, mcat } from "../models/index";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/generateToken";
import { ResponseStatus } from "../responseCode/code";
import { messages } from "../config/codeMsg";
import sendMail from "../utils/email";
export default class billService {
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
