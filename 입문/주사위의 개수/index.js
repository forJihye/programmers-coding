// https://school.programmers.co.kr/learn/courses/30/lessons/120845

const box = [10, 8, 6] // 상자 가로, 세로, 높이
const n = 3 // 주사위 모서리의 길이 정수

function solution (box, n) {
  let answer = 1;
  for (let i = 0; i < box.length; i++) {
    answer *= Math.floor(box[i] / n);
  }
  return answer;
}

const result = solution(box, n)
console.log(result)