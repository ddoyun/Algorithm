// 문제 - 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

function solution(n) {
    var answer = 0;
    const num = Math.sqrt(n);
    if(num % 1 == 0) {
        answer = Math.pow(num + 1,2);
    } else {
       answer = -1;
    }
    return answer;
}

// 먼저 제곱을 반환하는 Math.sqrt 메소드를 사용하여 n이 제곱인지 구하고
// n이 제곱일 때, 제곱한 값을 반환해주는 Math.pow 메소드에 num+1, 제곱을 하여 출력하게 만들고,
// n이 제곱이 아닐 때, -1를 출력했다.
