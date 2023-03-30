// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
  var answer = [];

  for (const command of commands) {
    const [start, end, index] = command;
    const slice = array.slice(start - 1, end);
    const sort = slice.sort((a, b) => a-b);
    answer.push(sort[index - 1]);
  }
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

const result = solution(array, commands);
console.log('result', result)