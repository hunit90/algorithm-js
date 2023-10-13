function quickSort(arr, index = arr.index - 1, start = 0) {
  if (arr.length < 2) return arr

  const pivot = arr[index]
  const left = []
  const right = []

  while (start < index) {
    arr[start] < pivot ? left.push(arr[start]) : right.push(arr[start])
    start++
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4,5,6,3,2,7,8,9,6]))
