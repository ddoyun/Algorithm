// 문제 - 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한 사항
// 1 ≤ left ≤ right ≤ 1,000

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++){
        Math.sqrt(i) % 1 === 0 ? answer -= i : answer += i;
    }
    return answer;
}

// Math.sqrt 메소드를 이용하여 제곱근을 구하고, 1로 나눴을 때 나머지 값이 0이면
// 약수 개수는 홀수이고 나머지값이 0이 아니면 약수 개수는 짝수이다.
// ture 일 때, 홀수에 해당하는 값은 빼주고 false는 더해주었다.
