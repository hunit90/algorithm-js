function binarySearch(arr, find) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)

    if (arr[mid] === find) {
      return `탐색(find)의 인덱스: ${mid}`
    }
    arr[mid] < find ? (start = mid + 1) : (end = mid - 1)
  }
  return
}

console.log(binarySearch([4,2,6,5,1], 6))