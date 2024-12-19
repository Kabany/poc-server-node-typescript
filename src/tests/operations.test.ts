import supertest from "supertest"
import { Context } from "tydet-core"

import { CreateList } from "../domain/operations/operations.service"

describe("Operations Service", () => {
  it("Should create a list of items with a number and a string as parameters", () => {
    let times = 1000
    let list = CreateList(times)
    expect(list.length).toBe(1000)
    // First item
    expect(list[0].id).toBe(1)
    expect(list[0].message).toBe("This is the message number 1")
    // 100th item
    expect(list[99].id).toBe(100)
    expect(list[99].message).toBe("This is the message number 100")
  })
})