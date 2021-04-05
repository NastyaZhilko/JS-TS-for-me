import {getBanknotes, getSum, getTriangleType, isEvenSumGreater, isSquareGreater} from "./01";

test("getTriangleType", () => {
    expect(getTriangleType(3, 3, 3)).toBe("10")
    expect(getTriangleType(1, 3, 3)).toBe("01")
    expect(getTriangleType(5, 4, 3)).toBe("11")
    expect(getTriangleType(9, 3, 3)).toBe("00")
})

test("isSquareGreater", () => {
    const areaCr = 3
    const areaSq = 4
    const result = isSquareGreater(areaCr, areaSq)
    expect(result ).toBe(true)
})

test("isEvenSumGreater", () => {
    const arrEven: Array<number> = [100, 1, 200, 3]
    const arrOdd: Array<number> = [1, 100, 2, 200]
    expect(isEvenSumGreater(arrEven)).toBe(true)
    expect(isEvenSumGreater(arrOdd)).toBe(false)
})
test("getSum", ()=>{
    expect(getSum(1000)).toBe(1)
    expect(getSum(12345)).toBe(15)
    expect(getSum(0)).toBe(0)
    expect(getSum(999)).toBe(18)
})

test("getBanknotes", ()=>{
    const result1500=getBanknotes(1500)
    const result123=getBanknotes(123)

    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)

    expect(result123[0]).toBe(100)
    expect(result123[1]).toBe(20)
    expect(result123[2]).toBe(2)
    expect(result123[3]).toBe(1)
})
