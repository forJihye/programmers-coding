// https://school.programmers.co.kr/learn/courses/30/lessons/120846

/**
 * 약수
 */

function solution(n) {
  let divisor = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    count >= 3 && divisor++;
    // console.log(count)
  }
  // console.log(divisor)
  return divisor;
}

const r = solution(15)
console.log(r)