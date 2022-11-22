// 분수의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(denum1, num1, denum2, num2) {
	let topNum = num1 * denum2 + num2 * denum1;
	let bottomNum = num1 * num2;
	//최소공배수
	let a = 1;
	for (let i = 2; i <= topNum; i++) {
		if (topNum % i === 0 && bottomNum % i === 0) {
			a = i;
		}
	}
	return [topNum / a, bottomNum / a];
}
console.log(solution(1, 2, 3, 4)); //[5, 4]
console.log(solution(9, 2, 1, 3)); //[29, 6]
