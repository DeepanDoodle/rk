import jwt, { Secret } from "jsonwebtoken";

export function generateAccessToken(userId: number): string {
  const accessToken = jwt.sign(
    { userId },
    process.env.JWT_SECRET_KEY as Secret,
    { expiresIn: process.env.JWT_EXPIRATION }
  );

  return accessToken;
}



