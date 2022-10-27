// 문제
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는
// 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// 입출력
// numbers : [2,1,3,4,1]
// resulㅅ : [2,3,4,5,6,7]

function solution(numbers) {
    var answer = [];
    let array = [];
    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++) {
            array.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(array)];
    return answer.sort((a,b) => a - b);
}

// 풀이
// 이중 for문으로 각각의 배열의 자리를 하나씩 더해주면 모든 배열의 더해진 수가 나온다
// 이것을 set 객체로 만들어 객체를 지우는 ... 구조분해 할당으로 배열로 만들고 중복 된 수를 삭제해준다.
// 그리고 sort로 오름차순으로 정렬한다.
