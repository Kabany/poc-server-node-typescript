import express from "express";
import { StatusCodes } from "http-status-codes";
import { RequestExtended, SuccessResponse } from "tydet-core-express";

import { CreateHash, CreateJwtTokenFromString, CreateTotp} from "./auth.service";

/** :message as body */
export function AuthCreateJwtTokenFromString(
  req: RequestExtended,
  res: express.Response,
) {
  let message = req.body.message
  let token = CreateJwtTokenFromString(message);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, {token})) as any;
}

/** :message as body */
export function AuthCreateHashFromString(
  req: RequestExtended,
  res: express.Response,
) {
  let message = req.body.message
  let hash = CreateHash(message);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, {hash})) as any;
}

/** :message as body */
export function AuthCreateTotpFromString(
  req: RequestExtended,
  res: express.Response,
) {
  let message = req.body.message
  let code = CreateTotp(message);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, {code})) as any;
}