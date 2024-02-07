const sum = (arr: number[]): number => {
    return arr.reduce((acc, cur) => acc + cur, 0);
};

interface Stdout {
    write(message: string): void;
}

const great = (stdOut: Stdout, message: string) => {
    stdOut.write(message);
};

export { sum, great };
