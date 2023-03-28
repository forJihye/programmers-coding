// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
  let total = 1;

  for (let i = 1; i <= n; i++) {
    total *= i;
    if (total === n ) return i;
    if ( total >= n ) return i - 1;
  }
  return total;
}

const r = solution(120)
console.log('result', r)