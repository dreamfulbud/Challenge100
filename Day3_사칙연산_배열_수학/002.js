// 중앙값 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
	const arr = array.sort((a, b) => a - b);
	const center = ~~(arr.length / 2);
	return arr[center];
}
console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
