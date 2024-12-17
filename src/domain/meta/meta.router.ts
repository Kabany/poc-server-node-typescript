import { Router } from 'express';
import { MetaHealthCheck, MetaPingPong, MetaVersion } from './meta.controller';

export const MetaRouter = Router();

MetaRouter.get('/meta/ping', MetaPingPong);
MetaRouter.get('/meta/health-check', MetaHealthCheck);
MetaRouter.get('/meta/version', MetaVersion);