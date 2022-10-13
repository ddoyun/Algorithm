// 문제 - 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 제한 사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    var answer = '';
    if (s.length % 2 === 0){
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        answer = s[Math.floor(s.length / 2)];
    }
    return answer;
}

// 문자열의 가운데 문자를 반환하기 위해 s의 길이 나누기, 반올림 후 2의 인덱스 번호를 반환하게 하였고,
// 짝수의 조건일때는 2로 나눴을 때 나머지가 0인 조건문을 만들어 짝수를 판별하여
// 인덱스 값이 길이 / 2-1, 길이 / 2 두가지를 출력하게 하였다.
