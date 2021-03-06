/*
문자열 내림차순으로 배치하기

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
*/

/* 내 풀이 */
// 1.
function solution(s) {
	//문자열을 배열로 변환 후 정렬시킨뒤 다시 문자열로 변환
	var arr = [];
	for(var i = 0; i < s.length; i++) {
		arr.push(s[i]);
	}
	
	arr.sort(function compStringReverse(a, b){
		if (a > b) return -1;
		if (b > a) return 1;
		return 0;
	})
	
	return arr.join('');
}

// 2.
function solution(s) {
	const arr = [];
	for(const i = 0; i < s.length; i++) {
		arr.push(s[i]);
	}

	return arr.sort((a,b) => {
		if (a > b) return -1;
		if (b > a) return 1;
		return 0;
	}).join('');
}


/* 다른사람 풀이 */

function solution(s) {
	return s.split('').sort((a, b) => {
		if (a > b) return -1;
		if (b > a) return 1;
		return 0;
	}).join('');
}
