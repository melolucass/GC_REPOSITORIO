import { describe, test, expect } from "vitest"
import { soma } from "./soma.js"

describe("Testes na função soma", () => {
    test("soma de numeros positivos", () => {
        expect(soma(2, 3)).toBe(5)
        expect(soma(6, 7)).toBe(13)
        expect(soma(9, 9)).toBe(18)
    })
    test("soma de numeros negativos", () => {
        expect(soma(-2, -3)).toBe(-5)
        expect(soma(-6, -7)).toBe(-13)
        expect(soma(-9, -9)).toBe(-18)
    })
})