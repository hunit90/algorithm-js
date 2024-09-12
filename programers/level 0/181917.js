function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

solution(false, true, true, true)