// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    let arr = s.split(" ");
    let answer = arr.map(el => el.charAt(0).toUpperCase() + el.substr(1).toLowerCase());
    
    return answer.join(" ");
}
