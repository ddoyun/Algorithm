// 문제 - 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 사항
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

function solution(a, b) {
    var answer = 0;
    if (a >= b){
        for (let i = b; i <= a; i++){
            answer += i; 
        }
    } else {
        for (let j = a; j <= b; j++){
            answer += j; 
        }
    }
    return answer;
}

// a와 b의 크기를 비교하여 a가 클 경우, 변수 할당을 b부터 시작하여 a값 만큼 더한다.
// 그외의 조건 else는 반대로 작성하였다.
