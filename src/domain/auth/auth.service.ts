import jwt from "jsonwebtoken";

const FIRST_JWT_SECRET = "ThisIsASuperSecret"

export function CreateJwtTokenFromString(text: string) {
  return jwt.sign(text, FIRST_JWT_SECRET)
}