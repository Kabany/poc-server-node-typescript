import { CreateJwtTokenFromString } from "../src/domain/auth/auth.service"

describe("Auth Service", () => {
  it("Should create a token from a simple string", () => {
    let message = "Hello World!"
    let token = CreateJwtTokenFromString(message)
    expect(token).toBe("eyJhbGciOiJIUzI1NiJ9.SGVsbG8gV29ybGQh.9Psf6DZ5pbHc97BaRVh3IXORqNaS3rd2UngUlOT_FUQ")
  })
})