// 문제 - 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 사항
// x는 1 이상, 10000 이하인 정수입니다.

function solution(x) {
    var answer = 0;
    var arr = String(x).split('');
    
    for(let i = 0; i < arr.length; i++){
        answer += Number(arr[i]);
    }
    return x % answer == 0 ? true : false;
}

// x를 split으로 나눠준다.
// for문을 돌려 x의 자릿수들을 더해준다.
// 삼항연산자로 x를 나눴을때 0이 안되는 값은 false로 반환한다.
