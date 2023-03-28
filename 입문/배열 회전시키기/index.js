// https://school.programmers.co.kr/learn/courses/30/lessons/120844

/**
 * 정수 배열 numbers
 * 문자열 direction 매개변수
 */

const numbers = [1, 2, 3];

function solution(numbers, direction) {
  var answer = [];
  if (direction === 'left') {
    for (let i = numbers.length - 1; i >= 0; i--) {
      var index = (i + 1);
      answer[i] = numbers[index >= numbers.length ? 0 : index]
    }
  } else if (direction === 'right') {
    for (let i = 0; i < numbers.length; i++) {
      var index = (i - 1);
      answer[i] = numbers[index < 0 ? numbers.length - 1 : index]
    }
  } else {
    return numbers;
  }
  return answer;
}

const reuslt = solution([4, 455, 6, 4, -1, 45, 6], 'left') // [455, 6, 4, -1, 45, 6, 4]
console.log(reuslt)