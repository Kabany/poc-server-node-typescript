import express from "express"
import { StatusCodes } from "http-status-codes"
import { RequestExtended, SuccessResponse } from "tydet-core-express"

import { properties } from "../../properties"

export function MetaPingPong(req: RequestExtended, res: express.Response) {
  return res.status(StatusCodes.OK).json(SuccessResponse(req, null, "pong!")) as any
}

export function MetaHealthCheck(req: RequestExtended, res: express.Response) {
  return res.status(StatusCodes.OK).json(SuccessResponse(req, null, "OK!")) as any
}

export function MetaVersion(req: RequestExtended, res: express.Response) {
  return res.status(StatusCodes.OK).json(SuccessResponse(req, null, properties.VERSION)) as any
}