import express from "express";
import { StatusCodes } from "http-status-codes";
import { RequestExtended, SuccessResponse } from "tydet-core-express";

import { CreateList, FibonacciList, FibonacciSum } from "./operations.service";

/** :times as parameter */
export function OperationsListWithParams(
  req: RequestExtended,
  res: express.Response,
) {
  let times = parseInt(req.params.times) || 0;
  let list = CreateList(times);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any;
}

/** times as query */
export function OperationsListWithQuery(
  req: RequestExtended,
  res: express.Response,
) {
  let times = parseInt(req.query.times as string) || 0;
  let list = CreateList(times);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any;
}

/** times as body */
export function OperationsListWithBody(
  req: RequestExtended,
  res: express.Response,
) {
  let times = req.body.times || 0;
  let list = CreateList(times);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any;
}

/** times as header */
export function OperationsListWithHeader(
  req: RequestExtended,
  res: express.Response,
) {
  let times = parseInt(req.headers.times as string) || 0;
  let list = CreateList(times);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, list)) as any;
}

export function OperationsFibonacciSum(
  req: RequestExtended,
  res: express.Response,
) {
  let num = parseInt(req.params.number) || 0;
  let sum = FibonacciSum(num);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, {sum})) as any;
}

export function OperationsFibonacciList(
  req: RequestExtended,
  res: express.Response,
) {
  let num = parseInt(req.params.number) || 0;
  let list = FibonacciList(num);
  return res.status(StatusCodes.OK).json(SuccessResponse(req, {list})) as any;
}