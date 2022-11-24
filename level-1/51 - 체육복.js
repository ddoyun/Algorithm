// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    const uniform = Array(n).fill(1);
  
    lost.map((lost) => {uniform[lost-1] = 0});
    reserve.map(reserve => {uniform[reserve-1] += 1});
    
    for(let i = 0; i < n; i++){
        if(uniform[i] === 0 && uniform[i-1] === 2){
            uniform[i] = 1;
            uniform[i-1] = 1;
        }
        if(uniform[i] === 0 && uniform[i+1] === 2){
            uniform[i] = 1;
            uniform[i+1]=1;
        }
    }
    return uniform.filter(x => x >= 1).length;
}

// 풀이
// 우선 모든 학생들이 체육복을 갖고 있다는 가정하에 학생의 인원만큼의 1이 나열 되어있는 배열을 만든다.
// 그리고 체육복을 잃어버린 학생의 배열번째를 0으로 바꾼다.
// 다음 여유분이 있는 학생의 배열번째를 +1 시켜준다.
// 반복문을 돌려 뒤와 비교하여 2를 나눠갖고, 앞과 비교하여 2를 나눠 갖게 만든다.
// uniform 배열의 1의 개수를 체크하여 반환한다.
