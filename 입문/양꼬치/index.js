// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  const sum = n * 12000;
  const drinkSum = k * 2000;
  const serviceCount = Math.floor(n / 10);
  const service = serviceCount * 2000;
  return (sum + drinkSum) - service;
}