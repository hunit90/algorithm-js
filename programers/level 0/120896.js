
function solution(s) {
  let answer = [];
  let arr = s.split('');

  arr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      answer.push(item);
    }
  })
  return answer.sort().join('');
}

solution('abcabcadc')