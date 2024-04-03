import jwt, { Secret } from "jsonwebtoken";
import response from "../responses/response";
import { ResponseStatus } from "../responseCode/code";
export class Authenticate {
  static verifyToken = async (req: any, res: any, next: any) => {
    try {
      const accessToken = req?.headers?.authorization || req?.params?.token;

      if (!accessToken) {
        return response.errors(
          req,
          res,
          ResponseStatus.HTTP_BAD_REQUEST,
          "No Access Token"
        );
      }

      const decoded = jwt.verify(
        accessToken,
        process.env.JWT_SECRET_KEY as Secret
      ) as { userId: number };

      req.id = decoded.userId;
    } catch (error) {
      throw error;
    }
  };
}
