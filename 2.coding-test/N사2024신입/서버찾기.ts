// 네이버 2024 신입 공채
// 서버 찾기

//! 푸는 중...

//| 스터디 메모

// 정렬되어 있나? 그렇다면 제일 낮은 ping과 높은 ping 사이는 다 만족할 것이다.

// 참고: unzip 함수를 쓸 수도 있다.
//|================================================

// delays : 각 서버의 지연 시간을 나타냄
// limits : 서버를 찾을 제한조건

// 제한 조건을 만족하는 서버들 중 가장 많은 참가자의 수와 서버 번호를 리턴
// 여러개면 가장 빠른 서버 번호를 리턴

// limits[0] : 모든 참가자들의 delay가 x배 이상 차이나지 않아야 한다.
// limits[1] : 모든 참가자들의 delay가 x초 이상 차이나지 않아야 한다. (x,000 ms)

const 서버찾기 = (delays: number[][], limits: number[]): number[] => {
  const mulFactor = limits[0]; // 배수 제한 조건 1
  const subFactor = limits[1]; // 차이 제한 조건 2

  const userCnt = delays.length; // 사람 수
  const serverCnt = delays[0].length; // 서버 수

  const servers = [];
  const is = [];
  for (let i = 0; i < serverCnt; i++) {
    const tmp = delays.map((v) => v[i]).sort((a, b) => a - b);
    servers.push(tmp);
    if (tmp.at(0)! * mulFactor > tmp.at(-1)!) {
      if (tmp.at(-1)! - tmp.at(0)! > subFactor) is.push(true);
    } else is.push(false);
  }
  console.log(servers);
  console.log(is);

  return [];
};

const day36delays1 = [
  [2423, 10],
  [3423, 30],
  [1, 40],
  [450, 50],
  [1200, 60],
  [2781, 100],
];
const day36limits1 = [2, 1];
console.log(서버찾기(day36delays1, day36limits1)); // [3, 2]

const day36delays2 = [
  [10, 50000, 100],
  [1, 100000, 1100],
  [51, 100000, 2100],
  [90, 100000, 3100],
  [73, 50000, 4100],
];
const day36limits2 = [10, 4];
console.log(서버찾기(day36delays2, day36limits2)); // [4, 1]
