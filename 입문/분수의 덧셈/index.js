// https://school.programmers.co.kr/learn/courses/30/lessons/120808
/**
 * * 유클리드 알고리즘
 * * 2개의 자연수의 최대공약수를 구하는 알고리즘입니다. 
 * * 비교대상의 두 개의 자연수 a와 b에서(단 a>b) a를 b로 나눈 나머지를 r이라고 했을때 
 * * GCD(a, b) = GCD(b, r)과 같고 "r이 0이면 그때 b가 최대공약수이다."라는 원리를 활용한 알고리즘입니다.
 * * ex) GCD(24,16) -> GCD(16,8) -> GCD(8,0) : 최대공약수 = 8
 */
function solution(denum1, num1, denum2, num2) {
  // 분자
  const denum = (denum1 * num2) + (denum2 * num1);
  // 분모
  const num = num1 * num2;
  // 최대 공약수
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  const max = gcd(denum, num);
  
  return [
      denum / max,
      num / max
  ]
}