// 두 수의 나눗셈
// https://school.programmers.co.kr/learn/courses/30/lessons/120806

function solution(num1, num2) {
	return ~~((num1 / num2) * 1000);
}
console.log(solution(3, 2));
console.log(solution(7, 3));
console.log(solution(1, 16));
