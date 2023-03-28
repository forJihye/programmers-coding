// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript


function solution(participant, completion) {
  participant.sort()
  completion.sort()

  for(const i in completion){
    if(participant[i] != completion[i]) {
      return participant[i];
    }
  }

  return participant[participant.length-1]
}

// const result = solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
const result = solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
console.log('result', result)