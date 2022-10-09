// 문제 - 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한 사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

function solution(numbers) {
    var answer = 0;
    for (let i = 0; i <= 9; i++){
        if (!numbers.includes(i)){
            answer += i;
        }
    }
    return answer;
}

// includes() 메소드를 이용하여 풀었다. 0~9 까지 주어진 배열의 숫자가 일치하지 않을 때
// 더하는 조건인데, includes()는 주어진 배열에 특정 요소가 있는지 판별하기 때문에
// numbers에 i 값이 없다면 answer에 더하여 반환하도록 만들었다.
