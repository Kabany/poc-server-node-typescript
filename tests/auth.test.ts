import { CreateHash, CreateJwtTokenFromString, CreateTotp, ValidateJwtToken } from "../src/domain/auth/auth.service"

describe("Auth Service", () => {
  it("Should create a JWT token from a simple string using the default algorithm HS256", () => {
    let message = "Hello World!"
    let token = CreateJwtTokenFromString(message)
    expect(token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQhIn0.IuiP9G4uZRbreQi4qWaZFlZMnvEtHig0AmYx-8NT7Q4")
  })

  it("Should create a JWT token, then decode it and must match with the original message", () => {
    let message = "Hello World!"
    let token = CreateJwtTokenFromString(message)
    let decoded = ValidateJwtToken(token)
    expect(message).toBe(decoded)

    // VALIDATE JWT FROM RUBY
    expect(decoded).toBe(ValidateJwtToken("eyJhbGciOiJIUzI1NiJ9.eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQhIn0.kiLVWiCroYBS-sgSmTP_u74OmiLt_l3UeUBGfM-lmE8"))
    // VALIDATE JWT FROM Swift
    expect(decoded).toBe(ValidateJwtToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQhIn0.mahh4kwbMrH_-7Np_G88KLJmkW5GtFYzbLiWAfpRiJQ"))
  })

  it("Should create a Hash token from a simple string using the SHA512 Hex algorithm", () => {
    let message = "Hello World!"
    let token = CreateHash(message)
    expect(token).toBe("861844d6704e8573fec34d967e20bcfef3d424cf48be04e6dc08f2bd58c729743371015ead891cc3cf1c9d34b49264b510751b1ff9e537937bc46b5d6ff4ecc8")
  })

  it("Should create a TOTP token from a simple string using the SHA512 algorithm", () => {
    let message = "JBSWY3DPEHPK3PXP" // a base32 string required
    let token = CreateTotp(message)
    let token2 = CreateTotp(message)
    expect(token).toBe(token2)
  })
})