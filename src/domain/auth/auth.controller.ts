import express from "express";
import { StatusCodes } from "http-status-codes";
import { RequestExtended, SuccessResponse } from "tydet-core-express";

import { CreateJwtTokenFromString} from "./auth.service";

/** :times as parameter */
export function AuthCreateJwtTokenFromString(
  req: RequestExtended,
  res: express.Response,
) {
  let message = req.body.message
  let token = CreateJwtTokenFromString(message);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, {token})) as any;
}