// 문제 - array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한 사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

function solution(arr, divisor) {
    var answer = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % divisor === 0){
            answer.push(arr[i]);
        }
    }
    return answer.length === 0? [-1] : answer.sort((a, b) => a - b);
}

// 먼저, 주어진 배열을 divisor로 나눠야 하기 때문에 반복문으로 돌렸고,
// 나머지가 0으로 떨어지는 수의 조건을 체크하여 answer에 push 메소드로 넣어줬다.
// 그리고 나머지가 0이 하나도 없는 조건은 삼항연산자로 true일때 -1 반환,
// false일때 오름차순으로 정렬하여 반환하게 하였다.
