import express from "express"
import { StatusCodes } from "http-status-codes"
import { RequestExtended, SuccessResponse } from "tydet-core-express"

import { CreateList } from "./operations.service"

/** :times as parameter */
export function OperationsListWithParams(req: RequestExtended, res: express.Response) {
  let times = parseInt(req.params.times) || 0
  let list = CreateList(times)
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any
}

/** times as query */
export function OperationsListWithQuery(req: RequestExtended, res: express.Response) {
  let times = parseInt(req.query.times as string) || 0
  let list = CreateList(times)
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any
}

/** times as body */
export function OperationsListWithBody(req: RequestExtended, res: express.Response) {
  let times = req.body.times || 0
  let list = CreateList(times)
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any
}

/** times as header */
export function OperationsListWithHeader(req: RequestExtended, res: express.Response) {
  let times = parseInt(req.headers.times as string) || 0
  let list = CreateList(times)
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any
}