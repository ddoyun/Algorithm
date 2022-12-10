// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
    let cnt = 0;
    for(let x of babbling){
        // aya|ye|woo|ma와 똑같은 내용이 그 뒤에 1번 이상 있는
        // 연속된 같은 발음이 있다면 continue를 통해 다음 단어로 넘어 감
        if (/(aya|ye|woo|ma)\1+/g.test(x)) continue;
        // 처음과 끝이 1회 이상 연속 일치 할 때 cnt 증가
        if (/^(aya|ye|woo|ma)+$/g.test(x)) cnt++
    }
    return cnt;
}

// 풀이
// 정규식을 사용하여 풀었다. (정규식 익히는 중)
// babbling를 탐색하는 for of문을 돌려서 babbling과 일치하는
// 정규식 조건문을 걸었다. 조건이 일치 했을 때, cnt를 증가 시켰다.
