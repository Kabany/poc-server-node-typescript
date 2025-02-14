import { CreateList, FibonacciList, FibonacciSum } from "../src/domain/operations/operations.service"

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
    // 1000th item
    expect(list[999].id).toBe(1000)
    expect(list[999].message).toBe("This is the message number 1000")
  })

  it("Should aggregate the items of the fibbonacci sequence", () => {
    expect(FibonacciSum(-1)).toBe(0)
    expect(FibonacciSum(0)).toBe(0)
    expect(FibonacciSum(1)).toBe(1)
    expect(FibonacciSum(2)).toBe(2)
    expect(FibonacciSum(3)).toBe(4)
    expect(FibonacciSum(4)).toBe(7)
    expect(FibonacciSum(5)).toBe(12)
    expect(FibonacciSum(10)).toBe(143)
    expect(FibonacciSum(50)).toBe(32951280098)
    //expect(FibonacciSum(100)).toBe(927372692193078999175)
  })

  it("Should return a list of fibbonacci sequence", () => {
    expect(FibonacciList(-1).length).toBe(0)
    let list0 = FibonacciList(0)
    expect(list0.length).toBe(1)
    expect(list0[0]).toBe(0)
    let list1 = FibonacciList(1)
    expect(list1.length).toBe(2)
    expect(list1[1]).toBe(1)
    let list2 = FibonacciList(2)
    expect(list2.length).toBe(3)
    expect(list2[2]).toBe(1)
    let list3 = FibonacciList(3)
    expect(list3.length).toBe(4)
    expect(list3[3]).toBe(2)
    let list4 = FibonacciList(4)
    expect(list4.length).toBe(5)
    expect(list4[4]).toBe(3)
    let list5 = FibonacciList(5)
    expect(list5.length).toBe(6)
    expect(list5[5]).toBe(5)
    let list6 = FibonacciList(6)
    expect(list6.length).toBe(7)
    expect(list6[6]).toBe(8)
    let list7 = FibonacciList(10)
    expect(list7.length).toBe(11)
    expect(list7[10]).toBe(55)
    let list8 = FibonacciList(50)
    expect(list8.length).toBe(51)
    expect(list8[50]).toBe(12586269025)
    let list9 = FibonacciList(78)
    expect(list9.length).toBe(79)
    expect(list9[78]).toBe(8944394323791464)
    /*let list10 = FibonacciList(100)
    expect(list10.length).toBe(101)
    expect(list10[100]).toBe(354224848179261915075)*/
  })
})