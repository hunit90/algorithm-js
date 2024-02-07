/**
 * 문제 설명
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 *
 * 제한 사항
 * n은 0 이상 3000이하인 정수입니다.
 * 입출력 예
 * n    return
 * 12    28
 * 5    6
 * 입출력 예 설명
 * 입출력 예 #1
 * 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.
 *
 * 입출력 예 #2
 * 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
 */

function solution (n) {
    let a = []
    let b = 1
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            a.push(i)
        }
    }
    let sum = a.reduce((a,b) => a + b, 0)
    return sum
}

/**
 * 문제 설명
 * 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
 *
 * 제한 조건
 * x는 -10000000 이상, 10000000 이하인 정수입니다.
 * n은 1000 이하인 자연수입니다.
 * 입출력 예
 * x    n    answer
 * 2    5    [2,4,6,8,10]
 * 4    3    [4,8,12]
 * -4    2    [-4, -8]
 * @param x
 * @param n
 * @returns {*[]}
 */
function solution(x, n) {
    var answer = [];
    let a = 0
    let tmp = x

    for (let i = 0 ; i < n; i++) {
        a += tmp
        answer.push(a)
    }
    return answer;
}

solution(2, 5)