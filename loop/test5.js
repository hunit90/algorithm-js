/*
다음과 같은 과정을 "재귀적 달팽이 채우기" 라고 정의합니다.
- 재귀적 달팽이 채우기(길이1, 길이2, ..., 길이L)
    1. 만약 L=1 이라면, 한 변의 길이가 "길이1"인 정사각형 안에 일반적인 달팽이 채우기를 진행합니다. 이때 각 칸에
    채울 숫자는 "가장 마지막에 사용한 숫자 + 1" (맨 처음에는 1)부터 시작합니다. 여기서 일반적인 달팽이 채우기는
    최상단 좌측(1행 1열)칸에서 시작하여 시계방향으로 돌아가면서 달팽이 모양으로 숫자를 하나씩 채우는 것을 말합니다.
    2. 만약 L > 1 이라면, 재귀적 달팽이 채우기(길이1, 길이2, ..., 길이 L-1)을 L^2번 진행한 뒤, 그 결과물들(=L^2 개의
    정사각형)을 각각 하나의 칸으로 간주하여 시계방향으로 달팽이 채우기를 하는 것처럼 배열합니다.

예를 들어 재귀적 달팽이 채우기(3,2) 를 한다면, 다음 그림과 같은 결과가 나올 것입니다.
- 괄호 왼쪽 위 부분은 길이가 3인 달팽이 채우기를 나타낸 것입니다.(1 단계)
- 괄호 왼쪽 아래 부분은 길이가 2인 달팽이 채우기를 나타낸 것입니다. (2 단계)
- 괄호 오른쪽 부분은 재귀적 달팽이 채우기의 최종 결과물을 나타낸 것입니다.
길이1, 길이2, ...들이 담긴 배열 length가 매개변수로 주어집니다. 이 길이들로 재귀적 달팽이 채우기를 진행했을때
나오는 결과물을 return 하도록 solution 함수를 완성해주세요.

제한사항
- lengths의 길이는 2이상 8이하입니다.
    - lengths의 모든 수는 2이상 100 이하입니다.
    - lengths의 모든 수의 곱은 256 이하입니다.

입출력 예
lengths result
[3,2] [[1,2,3,10,11,12],[8,9,4,17,18,13],[7,6,5,16,15,14],[28,29,30,19,20,21],[35,36,31,26,27,22],[34,33,32,25,24,23]]
[2,3] [[1,2,5,6,9,10],[4,3,8,7,12,11],[29,30,33,34,13,14],[32,31,36,35,16,15],[25,26,21,22,17,18],[28,27,24,23,20,19]]
[2,2,2] [[1,2,5,6,17,18,21,22],[4,3,8,7,20,19,24,23],[13,14,9,10,29,30,25,26],[16,15,12,11,32,31,28,27],[49,50,53,54,33,34,37,38],[52,51,56,55,36,35,40,39],[61,62,57,58,45,46,41,42],[64,63,60,59,48,47,44,43]]
 */

function snailArray(n, startValue) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let value = startValue;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) matrix[top][i] = value++;
        top++;
        for (let i = top; i <= bottom; i++) matrix[i][right] = value++;
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) matrix[bottom][i] = value++;
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) matrix[i][left] = value++;
            left++;
        }
    }

    return matrix;
}

function solution(lengths) {
    let currentValue = 1;
    let matrix = snailArray(lengths[0], currentValue);

    for (let i = 1; i < lengths.length; i++) {
        const blockSize = lengths[i];
        const prevMatrixSize = matrix.length;
        const newMatrixSize = prevMatrixSize * blockSize;
        const newMatrix = Array.from({ length: newMatrixSize }, () => Array(newMatrixSize).fill(0));

        const order = snailArray(blockSize, 1);

        let subMatrices = [];

        for (let r = 0; r < blockSize; r++) {
            for (let c = 0; c < blockSize; c++) {
                subMatrices.push(matrix.map(row => [...row])); // Deep copy
            }
        }

        for (let r = 0; r < blockSize; r++) {
            for (let c = 0; c < blockSize; c++) {
                const idx = order[r][c] - 1;
                const subMatrix = subMatrices[idx];

                for (let sr = 0; sr < prevMatrixSize; sr++) {
                    for (let sc = 0; sc < prevMatrixSize; sc++) {
                        newMatrix[r * prevMatrixSize + sr][c * prevMatrixSize + sc] = subMatrix[sr][sc] + (idx * prevMatrixSize * prevMatrixSize);
                    }
                }
            }
        }

        matrix = newMatrix;
    }

    return matrix;
}



// 테스트 케이스
// console.log(solution([3, 2]));
console.log(solution([2, 3]));
// console.log(solution([2, 2, 2]));