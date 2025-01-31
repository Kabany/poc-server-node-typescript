import jwt from "jsonwebtoken";
import shajs from "sha.js";
import { TOTP } from "totp-generator";

const FIRST_JWT_SECRET = "ThisIsASuperSecret"

export function CreateJwtTokenFromString(text: string) {
  return jwt.sign({message: text}, FIRST_JWT_SECRET, {noTimestamp: true})
}

export function ValidateJwtToken(token: string) {
  return (jwt.verify(token, FIRST_JWT_SECRET) as {message: string}).message
}

export function CreateHash(text: string) {
  return shajs("SHA512").update(text).digest("hex")
}

export function CreateTotp(text: string) {
  return TOTP.generate(text, {digits: 8, algorithm: "SHA-512", period: 30}).otp
}