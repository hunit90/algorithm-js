function bubble(arr, length = arr.length) {
  while (length > 0) {
    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1]) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap
      }
    }
    length--;
  }
  return arr;
}

console.log(bubble([5,3,2,6,8]));