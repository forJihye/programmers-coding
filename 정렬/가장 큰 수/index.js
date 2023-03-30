// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

function solution(numbers) {
  var answer = '';
  const sorting = numbers => {
    if (numbers.every(num => num === 0)) return ['0'];
    else return numbers.sort((a, b) => (b.toString() + a.toString()) - (a.toString() + b.toString()));
  }
  answer = sorting(numbers).join('');
  return answer
}

// [6102, 6210, 1062, 1026, 2610, 2106]
const numbers = [6, 10, 2]
// const numbers = [0, 0, 0]

const result = solution(numbers);
console.log('result', result)