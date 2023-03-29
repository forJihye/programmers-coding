// https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

function solution(geners, plays) {
  const anwser = [];
  const groups = geners.reduce((acc, val, i) => {
    acc[val] ? acc[val].push({i, play: plays[i]}) : acc[val] = [{i, play: plays[i]}]
    return acc;
  }, {});

  for (const key in groups) {
    const sorted = groups[key].sort((a, b) => b.play - a.play);
    groups[key] = sorted;
  }
  // console.log(groups);

  const playsSum = Object.entries(groups).map(([gener, plays], i) => {
    const sum = plays.reduce((acc, val) => val.play += acc ,0);
    return [gener, sum, plays]
  })
  const genersSorted = playsSum.sort((a, b) => b[1] - a[1]);

  for (const data of genersSorted) {
    const [gener, total, plays] = data;
    // console.log([gener, total, plays]);
    const topPlays = plays.slice(0, 2); // 탑 2개
    for (const topPlay of topPlays) {
      const { i, play } = topPlay;
      anwser.push(i);
    }
  }
  
  return anwser;
}

// [4, 1, 3, 0]
const geners = ["classic", "pop", "classic", "classic", "pop", "jazz"];
const plays = [500, 600, 150, 800, 2500, 300];

const result = solution(geners, plays);
console.log('result', result)