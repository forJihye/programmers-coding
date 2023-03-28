// https://school.programmers.co.kr/learn/courses/30/lessons/120820

function solution(age) {
  const now = new Date();
  const year = now.getFullYear();
  return year - (age-1);
}