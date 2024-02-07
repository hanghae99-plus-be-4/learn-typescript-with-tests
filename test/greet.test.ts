import {greet, Stdout} from '../src/sum'

class MockStdout implements Stdout {
    buffer = ''

    write(message: string): void {
        this.buffer = message
    }
}

test('test greet', () => {
    const mockStdout = new MockStdout()

    greet(mockStdout, 'Hello')

    expect(mockStdout.buffer).toBe('Hello')
})

greet(process.stdout, 'Hello')
