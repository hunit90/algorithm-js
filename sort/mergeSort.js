function mergeSort(arr, half = arr.length / 2) {
  if (arr.length < 2) return arr

  const left = arr.splice(0, half)

  return merger(mergeSort(left), mergeSort(arr))
}

function merger(left, right) {
  const arr = []
  while ( left.length && right.length ) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

console.log(mergeSort([10,5,6,7,4,8,9,2,1,3]))