import jwt from "jsonwebtoken";
import shajs from "sha.js";

const FIRST_JWT_SECRET = "ThisIsASuperSecret"

export function CreateJwtTokenFromString(text: string) {
  return jwt.sign(text, FIRST_JWT_SECRET)
}

export function CreateHash(text: string) {
  return shajs("SHA512").update(text).digest("hex")
}