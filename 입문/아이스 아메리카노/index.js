// https://school.programmers.co.kr/learn/courses/30/lessons/120819
function solution(money) {
  const total = Math.floor(money / 5500);
  const remainder = money - (total * 5500);
  return [total, remainder];
}