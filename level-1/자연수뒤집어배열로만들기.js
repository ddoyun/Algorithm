// 문제 - 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 사항
// n은 10,000,000,000이하인 자연수입니다.

function solution(n) {
    return String(n).split('').reverse().map(num => + num);
}

// 자연수를 배열로 만드려면 문자열로 바꿔서 치환해 줘야하기 때문에 문자열로 바꾸고 배열로 만든 뒤 reverse해 주었다.
// 그 다음이 문제였는데 for문으로 돌리기엔 가독성이 없어서 찾아보던 중 map()을 보게 되었고 적용해 보았다.
// map() 메소드는 콜백 함수를 이용해 각각의 요소에 호출해서 그 값을 변환할 수 있게 해준다.
// 즉, 콜백 함수가 배열의 각 요소에 실행되기 때문에 간단히 해결했다.
