import { Stdout, greet } from '../src/sume';

class MockStdout implements Stdout {
    buffer: string = '';

    write(message: string) {
        this.buffer = message;
    }
}

test('test greet', () => {
    const mockStdout = new MockStdout();

    greet(mockStdout, 'hello');
    expect(mockStdout.buffer).toBe('hello\n');
    // great(process.stdout, 'hello');
});
