// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  const sum = numbers.reduce((acc, val) => {
      return acc += val;
  }, 0); 
  return sum / numbers.length;
}