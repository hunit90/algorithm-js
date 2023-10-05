function selectionSort(arr, length = arr.length) {
  for (let i = 0 ; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}

console.log(selectionSort([4,5,1,2,9,6]));