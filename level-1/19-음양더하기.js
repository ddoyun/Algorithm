// 문제 - 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의
// 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한 사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

function solution(absolutes, signs) {
    var answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    return answer
}

// 조건은 불리언으로 주어진 배열의 맞춰 주어진 배열에 - , + 를 시켜주고, 모두 더하는 문제이다.
// 우선 조건문으로 모두 더할 absolutes.length을 가져오고, 0번째부터 증가하여 진행시킨다.
// 불리언 배열에 맞춰 + , - 를 시켜줘야 하기 때문에 조건으로 signs[i] === true일때 absolutes[i]를 증가하며 answer에 뿌려줬고,
// 아닐때는 absolutes[i]를 감소시키며 뿌려줬다.
