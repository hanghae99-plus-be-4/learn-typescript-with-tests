export function sum(arr: number[]): number {
    let r = 0
    for (let i = 0; i < arr.length; i++) {
        r += arr[i]
    }
    return r
}
