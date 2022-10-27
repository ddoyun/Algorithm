// 문제
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해
// 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.

// 입출력
// array : [1, 5, 2, 6, 3, 7, 4]
// commands : [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
// return : [5, 6, 3]

function solution(array, commands) {
    var answer = [];
    for(var i = 0; i < commands.length; i++){
        let x = commands[i][0];
        let y = commands[i][1];
        let z = commands[i][2];
        let klist = array.slice(x - 1, y).sort((a, b) => a - b);
        answer.push(klist[z - 1]);
    }
    return answer
}

// 풀이
// for문을 돌려 변수 x, y 각각 commands[i][0] 과 commands[i][1] 담고,
// 이 숫자는 n번째부터 n번째까지 자르기 때문에 slice를 사용하여 slice(x - 1, y)로 넣어줬다.
// x -1 은 배열은 0번째부터 시작하기 때문에 -1을 해주었다. 그리고 sort로 오름차순으로 정렬했다.
// kilst 변수에 생성된 배열을 담고, push로 commands[i][2] -1번 째를 빼와서 새로운 배열에 담았다. 
