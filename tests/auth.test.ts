import { CreateHash, CreateJwtTokenFromString } from "../src/domain/auth/auth.service"

describe("Auth Service", () => {
  it("Should create a JWT token from a simple string using the default algorithm HS256", () => {
    let message = "Hello World!"
    let token = CreateJwtTokenFromString(message)
    expect(token).toBe("eyJhbGciOiJIUzI1NiJ9.SGVsbG8gV29ybGQh.9Psf6DZ5pbHc97BaRVh3IXORqNaS3rd2UngUlOT_FUQ")
  })

  it("Should create a Hash token from a simple string using the SHA512 Hex algorithm", () => {
    let message = "Hello World!"
    let token = CreateHash(message)
    expect(token).toBe("861844d6704e8573fec34d967e20bcfef3d424cf48be04e6dc08f2bd58c729743371015ead891cc3cf1c9d34b49264b510751b1ff9e537937bc46b5d6ff4ecc8")
  })
})