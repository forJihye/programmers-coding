// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

// 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index

function solution(citations) {
  var answer = 0;
  const sort = citations.sort((a, b) => b - a)
  
  if (!citations.length) return answer = 0;
  for (let i = 1; i <= citations.length; i++) {
    const citation = sort[i - 1] // 인용 수
    if (citation >= i) {
      answer = i;
    }
  }
  return answer;
}

// const citations = [3, 0, 6, 1, 5];
// const citations = [2]; // 1
// const citations = [100, 100, 100]; // 3
const citations = [6, 5, 5, 5, 3, 2, 1, 0] // 4
const result = solution(citations);
console.log('result', result)