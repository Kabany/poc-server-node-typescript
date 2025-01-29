import { Router } from "express";
import {
  AuthCreateHashFromString,
  AuthCreateJwtTokenFromString
} from "./auth.controller";

export const AuthRouter = Router();

AuthRouter.post("/auth/jwt/string", AuthCreateJwtTokenFromString);
AuthRouter.post("/auth/hash/string", AuthCreateHashFromString);