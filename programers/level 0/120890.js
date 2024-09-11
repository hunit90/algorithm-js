

function solution(array, n) {
  let answer = 0;
  let arr = [];
  array = array.sort();
  for (let i = 0; i < array.length; i++) {
    arr[i] = Math.abs(Math.abs(array[i] - n));
  }

  let min = Math.min(...arr);
  let idx = arr.indexOf(min);

  answer = array[idx];
  return answer;
}

console.log(solution([3,10,28], 20))