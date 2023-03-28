// https://school.programmers.co.kr/learn/courses/30/lessons/120809
function solution(numbers) {
  return numbers.reduce((acc, val) => {
      acc.push(val * 2)
      return acc;
  }, []);
}