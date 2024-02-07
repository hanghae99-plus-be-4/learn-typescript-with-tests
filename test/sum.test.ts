import {sum} from "../src/sum";

test('sample', () => {
    expect(1 + 1).toBe(2)
})

test('sum all numbers of the array', () => {
    const numbers = [1, 2, 3, 4, 5]

    const got = sum(numbers)
    const want = 15

    expect(got).toBe(want)
})
