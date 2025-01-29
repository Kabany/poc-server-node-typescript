import { Router } from "express";
import {
  AuthCreateJwtTokenFromString
} from "./auth.controller";

export const AuthRouter = Router();

AuthRouter.post("/auth/jwt/string", AuthCreateJwtTokenFromString);