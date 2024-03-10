# Learn TypeScript with tests

테스트 주도 개발로 타입스크립트를 학습합니다.

시작 브랜치는 `start` 로 해주시고, `main` 브랜치의 내용을 커밋 순서대로 따라와주세요. (docs, chore 커밋 제외)

> 본 실습은 항해 플러스 백엔드 4기 사전 스터디 내용입니다.

# 테스트 case 1 - sum 함수

```ts
interface sum {
    (arr: number[]): void
}

test('sum all numbers of the array', () => {
    const numbers = [1, 2, 3, 4, 5]

    const got = sum(numbers)
    const want = 15

    expect(got).toBe(want)
})

```

간단한 sum 함수를 tdd 로 진행해봅니다.

# 테스트 case 2 - greet 함수 (의존성 주입, DI 실습)

```ts
interface greet {
    (message: string): void // 모니터에 message 출력
}

interface Stdout {
    // node.js 의 process.stdout 은 write 메소드를 구현함
    write(message: string): void
}

// 가상의 stdout 객체를 생성
class MockStdout implements Stdout {
    buffer = ''

    write(message: string): void {
        this.buffer = message
    }
}

// test 환경 -> 가상 버퍼에 'Hello' 출력
test('log "Hello" in test development', () => {
    const mockStdout = new MockStdout()

    greet(mockStdout, 'Hello')

    expect(mockStdout.buffer).toBe('Hello')
})

// production 환경 -> 실제로 'Hello' 출력
greet(process.stdout, 'Hello')


```

의존성 주입에 대해 알아봅니다.

console.log 는 어떻게 테스트 할 수 있을까요?

보다 근본적인(stdout, 표준 출력) 레벨에서 생각해봅시다.
