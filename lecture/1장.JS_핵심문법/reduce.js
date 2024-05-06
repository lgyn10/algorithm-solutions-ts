const arr = [5, 1, 24, 64, 5, 23, 4, 756, 6];

console.log(Math.min(...arr));
console.log(arr.reduce((a, b) => Math.min(a, b)));

// 두 코드의 성능 차이 숙지
