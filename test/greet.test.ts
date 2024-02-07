import {greet, Stdout} from '../src/greet'

class MockStdout implements Stdout {
    buffer = ''

    write(message: string): void {
        this.buffer = message
    }
}

test('log "Hello" in test development', () => {
    const mockStdout = new MockStdout()

    greet(mockStdout, 'Hello')

    expect(mockStdout.buffer).toBe('Hello')
})

// production 환경
greet(process.stdout, 'Hello') // Hello 출력
