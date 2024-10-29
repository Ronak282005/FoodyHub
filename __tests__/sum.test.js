import { expect,test } from "vitest";
import { sum } from "./sum";


test("test of a function which return the sum of two number",()=>{
    const result = sum(3,4)

    expect(result).toBe(7)
})
