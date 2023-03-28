// https://school.programmers.co.kr/learn/courses/30/lessons/1845

/**
 * 중복되지 않는, 선택 가능한 포켓몬의 수를 구하는 것
 */

function solution(nums) {
  let answer = 0;
  const size = nums.length / 2;
  const set = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  if (set.size > size) return answer = size;
  return answer = set.size;
}

// [3,3,3,2,2,4]
// [3,1,2,3]
const result = solution([3,3,3,2,2,4])
console.log('result', result)