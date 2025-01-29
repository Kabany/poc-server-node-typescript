import { Router } from "express";
import {
  AuthCreateHashFromString,
  AuthCreateJwtTokenFromString,
  AuthCreateTotpFromString
} from "./auth.controller";

export const AuthRouter = Router();

AuthRouter.post("/auth/jwt/string", AuthCreateJwtTokenFromString);
AuthRouter.post("/auth/hash/string", AuthCreateHashFromString);
AuthRouter.post("/auth/totp/string", AuthCreateTotpFromString);