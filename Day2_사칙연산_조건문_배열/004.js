// 배열 두 배 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120809

function solution(numbers) {
	return numbers.map((i) => i * 2);
}
console.log(solution([1, 2, 3, 4, 5])); //[2, 4, 6, 8, 10]
console.log(solution([1, 2, 100, -99, 1, 2, 3])); //[2, 4, 200, -198, 2, 4, 6]
