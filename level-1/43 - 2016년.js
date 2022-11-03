// 문제
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// 입출력
// a	b	result
// 5	24	"TUE"

function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
}

// 풀이
// new Date(year, monthIndex, day)
// 날짜를 가져오는 new Date()를 이용하여 년도, 인덱스값, 날짜 값을 받아와 문자열로 만들어
// 요일이 나오는 0번째 3글자를 slice()로 잘라주고 대문자로 변환했다.
// monthIndex에 -1은 0번째부터 시작하기 때문에 -1을 했다.
