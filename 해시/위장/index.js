// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

/**
 * 1. 의상 이름은 중복되지 않음.
 */

function solution(clothes) {
  let answer = 1;
  
  const clothByCategory = clothes.reduce((acc, val) => {
    const cloth = val[0];
    const category = val[1];
    acc[category] ? acc[category].push(cloth) : (acc[category] = [cloth]);
    return acc;
  }, {});
  
  console.log(clothByCategory);

  for (const [key, value] of Object.entries(clothByCategory)) {
    answer *= (value.length + 1);
  }
  return answer - 1;
}

const clothes1 = [
  ["yellow_hat", "headgear"], //  [의상의 이름, 의상의 종류]
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
const clothes2 = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
];
const result = solution(clothes1);
console.log("result", result);
