import { Router } from 'express';
import { OperationsList } from './operations.controller';

export const OperationsRouter = Router();

OperationsRouter.get('/operations/list/:times', OperationsList);