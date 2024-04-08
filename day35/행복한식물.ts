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

console.log(식물의상태([2, 1, 3, 4, 3], [2, 2, 2, 2, 5, 5, 5])); // [5, 4, 2, 1, 0, 0, 0]
