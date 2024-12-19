import { config } from "dotenv";
import { LogLevel } from "tydet-core-logger";
config();

export const properties = {
  VERSION:
    typeof process.env.VERSION === "undefined" ? "1.0.0" : process.env.VERSION,
  ENVIRONMENT:
    typeof process.env.ENVIRONMENT === "undefined"
      ? "development"
      : process.env.ENVIRONMENT,
  HOST:
    typeof process.env.HOST === "undefined" ? "localhost" : process.env.HOST,
  PORT:
    typeof process.env.PORT === "undefined" ? 3000 : parseInt(process.env.PORT),
  LOG_LEVEL:
    typeof process.env.LOG_LEVEL === "undefined"
      ? LogLevel.DEBUG
      : process.env.LOG_LEVEL,
};
