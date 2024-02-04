/**
 * 문제
 *
 * N개의 정수가 주어진다. 이때 최솟값과 최댓값을 구하는 프로그램을 작성하시오
 */

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(x => Number(x))

let min = arr.reduce((a, b) => Math.min(a,b))
let max = arr.reduce((a, b) => Math.max(a,b))

console.log(min, max)