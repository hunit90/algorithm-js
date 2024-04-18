/**
 * 문제 설명
 * 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
 * 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
 *
 * 제한 조건
 * n과 m은 각각 1000 이하인 자연수입니다.
 * 예시
 * 입력
 *
 * 5 3
 * 출력
 *
 * *****
 * *****
 * *****
 */
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { //입력받은 숫자를 'data에 받는다'
    const n = data.split(" "); // data(입력받은 숫자)를 배열로 변경
    const a = Number(n[0]), b = Number(n[1]); //a는 한줄에대한 별의 갯수, b는 몇줄 출력
    for (let i = 0; i < b; i++) {
        let str = '';
        for (let j = 0; j < a; j++) {
            str += '*';
        }
        console.log(str)
    }
});
