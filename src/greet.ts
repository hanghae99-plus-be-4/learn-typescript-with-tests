// export function greet(message: string) {
//     // how to test?
//     console.log(message)
// }

export interface Stdout {
    write(message: string): void
}

export function greet(stdout: Stdout, message: string) {
    stdout.write(message)
}
