// 문제 - 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 사항
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min(arr)), 1);
    if (arr.length <= 1) {
        return [-1];
    }
    return arr;
}

// 처음 작성한 코드는 테스트 실행은 통과했지만 제출은 안됐다.

function solution(arr) {
    let min = arr.indexOf(Math.min(...arr));
    arr.splice(min, 1);
    return (arr.length == 0 ? [-1] : arr);
}

// 두번째로 작성한 코드
// ...로 배열을 날리고, indexOf를 찾아 변수 후, splice로 해당 배열 값을 날렸다.
