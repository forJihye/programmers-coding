// https://school.programmers.co.kr/learn/courses/30/lessons/120583
function solution(array, n) {
  let count = 0;
  for (const num of array) {
      if (num === n) {
          count++;
      }
  }
  return count;
}