import { Router } from "express";
import {
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
