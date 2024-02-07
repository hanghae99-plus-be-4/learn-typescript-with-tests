// test('sample', () => {
//     expect(1 + 1).toBe(2)
// })

import { sum } from '../src/sume';

// console.log는 테스트하기 어렵다
test('sum all numbers in array', () => {
    const arr = [1, 2, 3, 4, 5];

    const got = sum(arr);
    const want = 15;

    expect(got).toBe(want);
});
