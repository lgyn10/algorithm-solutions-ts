// 네이버 2024 신입 공채

// 부수 효과 핸들링에 대한 코딩 테스트..?

// ver 1. 최초 코드
const 식물의상태 = (emotions: number[], orders: number[]): number[] => {
  const ans = [];
  const initialEmotions = [...emotions];

  for (const order of orders) {
    // 식물 물주기 한 사이클 진행
    emotions = emotions.map((v, i) => (order - 1 === i && v > 0 ? initialEmotions[order - 1] : v - 1));

    // 현 사이클의 기분 좋은 식물 상태의 수
    ans.push(emotions.filter((v) => v > 0).length);
  }
  return ans;
};

// ver 2. 개선 코드
// filter 함수를 제거하고 map 함수 내에서 바로 검사할 수 있도록 하여
// 불필요한 배열 순회를 막았음
const 식물의상태2 = (emotions: number[], orders: number[]): number[] => {
  const ans = [];
  const initialEmotions = [...emotions];
  for (const order of orders) {
    // 기분이 좋은 식물의 수
    let cnt = 0;
    // 식물 물주기 사이클 진행
    emotions = emotions.map((v, i) => {
      const val = order - 1 === i && v > 0 ? initialEmotions[order - 1] : v - 1;
      if (val > 0) cnt++; // 사이클 진행 후 식물의 기분 척도 검사
      return val;
    });
    ans.push(cnt);
  }
  return ans;
};

console.log(식물의상태([2, 3, 1, 2], [3, 1, 2, 1, 4, 1])); //  [4, 2, 2, 2, 2, 1]
console.log(식물의상태([5, 5, 5], [1, 2, 1, 2, 3])); // [3, 3, 3, 3, 3]
console.log(식물의상태([5, 5, 5], [1, 2, 1, 2, 1])); // [3, 3, 3, 3, 2]
console.log(식물의상태([2, 1, 3, 4, 3], [2, 2, 2, 2, 5, 5, 5])); // [5, 4, 2, 1, 0, 0, 0]

console.log(식물의상태2([2, 3, 1, 2], [3, 1, 2, 1, 4, 1])); //  [4, 2, 2, 2, 2, 1]
console.log(식물의상태2([5, 5, 5], [1, 2, 1, 2, 3])); // [3, 3, 3, 3, 3]
console.log(식물의상태2([5, 5, 5], [1, 2, 1, 2, 1])); // [3, 3, 3, 3, 2]
console.log(식물의상태2([2, 1, 3, 4, 3], [2, 2, 2, 2, 5, 5, 5])); // [5, 4, 2, 1, 0, 0, 0]
