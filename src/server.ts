import { Context } from "tydet-core";
import { LogLevel, Logger, LoggerMode } from "tydet-core-logger";
/*import { MysqlConnector } from "tydet-core-mysql"
import { RedisConnector } from "tydet-core-redis" */
import { Express } from "tydet-core-express";

import { properties } from "./properties";

import { MetaRouter } from "./domain/meta/meta.router";
import { OperationsRouter } from "./domain/operations/operations.router";
//import { EndpointRouter } from "./domain/endpoints/router"

export const instance = new Context();

export const LOGGER = "logger";
export const AUTH_REDIS = "auth_redis";
export const AUTH_DB = "auth_db";
export const EXPRESS = "express";

export async function mountServer() {
  await instance.mountService(
    LOGGER,
    new Logger([
      { mode: LoggerMode.CONSOLE, min: properties.LOG_LEVEL as LogLevel },
    ]),
  );
  /*await instance.mountService(AUTH_DB, new MysqlConnector({host: secrets.DB_HOST, user: secrets.DB_USER, pass: secrets.DB_PASS, db: secrets.DB_NAME}))
  await instance.mountService(AUTH_REDIS, new RedisConnector({host: secrets.REDIS_HOST})) */
  await instance.mountService(
    EXPRESS,
    new Express({ port: properties.PORT, host: properties.HOST }, [
      MetaRouter,
      OperationsRouter,
    ]),
  );
}
