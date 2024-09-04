/*
문자열 s에 있는 알파벳 중 'a'와 'z'를 하나씩 선택하려고 합니다.
이때, 선택한 'a'와 'z' 사이의 문자열에다른 'a'와 'z'가 없어야 합니다.
예를 들어 주어진 문자열이 'zabzczxa'인 경우, 다음과 같이 세 가지 방법이 가능합니다.
'z' 'a' bzczxaz 'a' b 'z' czxazabzc 'z' x 'a'그러나 z 'a' bzc 'z' xa 와 같은 선택은 선택된 'a'와 'z' 사이의 문자열 'bzc'에 'z'가 포함되어 있으므로 불가능합니다.
문자열 s가 매개변수로 주어질때, 주어진 규칙에 맞게 'a'와 'z' 를 선택하는 서로 다른 방법의 가짓수를 return 하도록solution 함수를 완성해주세요.
제한사항
- 문자열 s의 길이는 1이상 100,000이하입니다.
- 문자열은 알파벳 소문자로만 이루어 져있습니다.
입출력 예
s result
"abcz" 1
"zabzczxa" 3
"abcd" 0
입출력 예
설명

입출력 예 #1
다음과 같이 한 가지가 가능합니다.
- a bc z
입출력 예 #2
문제 예시와 같습니다.
입출력 예 #3
a와 z를 선택할 방법이 없습니다.
 */

function solution(s) {
  let queue = [];
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'z') {
      queue.push(s[i]);

      if (queue.length === 2) {
        if ((queue[0] === 'a' && queue[1] === 'z') || (queue[0] === 'z' && queue[1] === 'a')) {
          answer++;
        }
        queue.shift();
      }
    }
  }

  return answer;
}

// 테스트 케이스
console.log(solution("abcz")); // 1
console.log(solution("zabzczxa")); // 3
console.log(solution("abcd")); // 0