// 문제 - 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수,
// solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

function solution(n, m) {
    let max = 1;
    for(let i = 2; i <= Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            max = i;
        }
    }
    const min = n * m / max;
    return [max, min];
}
// 최대공약수(GCD, Greatest Common Divisor) : 두 자연수의 공통된 약수 중 가장 큰 수를 의미한다. 예를들어 72와 30의 최대 공약수는 6이 된다.
// 최소공배수(LCM, Least Common Multiple) : 두 자연수의 공통된 배수 중 가장 작은 수를 의미하며, 최소공배수는 두 인수의 곱을 한 후 그 값을 최대공약수로 나누면 구할 수 있다.
// 위의 예시를 가져와 이용한다면 72와 30의 곱은 2160이고 최소 공약수는 6이므로 이를 나누면, 최소공배수는 360이 된다.
// 2개의 자연수를 받아서 최대공약수가 될 때 까지 2부터 두 자연수 중 작은 자연수까지 모두 나누면 최대 공약수를 구할 수 있다.

// 유클리드 호제 법
function solution(n, m) {
    let max = (a, b) => a % b === 0 ? b : max(b, a % b);
    let min = max(n, m);
    return [min, n * m / min];
}
