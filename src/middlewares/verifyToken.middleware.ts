import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { verify } from "jsonwebtoken";

export const authenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

  if (!authorization) throw new AppError("Missing Bearer Token", 401);

  const [bearer, token]: string[] = authorization.split(" ");

  return verify(token, String(process.env.SECRET_KEY), (error, decoded) => {
    if (error) throw new AppError(error.message, 401);
    res.locals = { ...res.locals, decoded };
    return next();
  });
};
