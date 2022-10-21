// 문제 - 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한 사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

function solution(arr){
    return arr.filter((num, i) => num != arr[i + 1]);
}

// filter()를 사용하여 num(요소값) 

// 원래 for문으로 돌렸다가 filter에 익숙해지고 싶어서 사용해봤다.
// filter(number, index, source) - 특정 조건을 만족하는(필터로 거르다로 기억) 새로운 배열을 필요로 할 때 쓰인다.

const numbers = [1];
numbers.filter((number, index, source) => {
    // number: 요소값
    // index: source에서 요소의 index
    // source: 순회하는 대상
    console.log(number);
    // 1
    console.log(index);
    // 0
    console.log(source);
    // [1]
    return number > 3;
});

