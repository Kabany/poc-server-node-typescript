import { Router } from "express";
import {
  OperationsFibonacciList,
  OperationsFibonacciSum,
  OperationsListWithBody,
  OperationsListWithHeader,
  OperationsListWithParams,
  OperationsListWithQuery,
} from "./operations.controller";

export const OperationsRouter = Router();

OperationsRouter.get(
  "/operations/list/params/:times",
  OperationsListWithParams,
);
OperationsRouter.get("/operations/list/query", OperationsListWithQuery);
OperationsRouter.post("/operations/list/body", OperationsListWithBody);
OperationsRouter.get("/operations/list/headers", OperationsListWithHeader);

OperationsRouter.get("/operations/fibonacci/sum/:number", OperationsFibonacciSum);
OperationsRouter.get("/operations/fibonacci/list/:number", OperationsFibonacciList);