import jwt, { Secret } from "jsonwebtoken";
import response from "../responses/response";
import { ResponseStatus } from "../responseCode/code";
export class Authenticate {
  static verifyToken = async (req: any, res: any, next: any) => {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader.split(' ')[1];


      const accessToken = token ||  req?.params?.token ;

      console.log("AT",accessToken);
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
      next();
    } catch (error) {
      throw error;
    }
  };
}
