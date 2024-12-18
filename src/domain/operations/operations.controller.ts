import express from "express"
import { StatusCodes } from "http-status-codes"
import { RequestExtended, SuccessResponse } from "tydet-core-express"

/** :times as parameter */
export function OperationsList(req: RequestExtended, res: express.Response) {
  let list = []
  let times = parseInt(req.params.times) || 0
  let count = 0
  while (times > count) {
    list.push({id: count + 1, message: `This is the message number ${count + 1}`})
    count++
  }
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any
}