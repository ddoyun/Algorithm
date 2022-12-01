// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for(let x of moves) {
    for (let i = 0; i < board.length; i++) {
      let item = board[i][x - 1];
      if (item === 0) continue;

      if (item === stack[stack.length - 1]) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(item);
      }
      board[i][x - 1] = 0;
      break;
    }
  }
  return answer;
}

// 풀이
// 작동시킨 횟수를 board로 순회하기 때문에 이중 for문을 돈다.
// 
