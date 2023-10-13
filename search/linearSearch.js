function linearSearch(arr, find) {
  for (let i = 0 ; i < arr.length; i++) {
    if (arr[i] === find) {
      return `find index : ${i}`
    }
  }
  return
}

console.log(linearSearch([4,5,2,1,9], 9))