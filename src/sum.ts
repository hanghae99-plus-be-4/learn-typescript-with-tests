export function sum(numbers: number[]): number {
    let r = 0
    for (let i = 0; i < numbers.length; i++) {
        r += numbers[i]
    }
    return r
}
