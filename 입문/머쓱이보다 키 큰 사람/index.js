// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  let result = 0;
  for (const num of array) {
      if (num > height) {
          result++;
      }
  }
  return result;
}