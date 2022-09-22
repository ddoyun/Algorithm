// 문제 - 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
      if(n % i === 0){
          answer += i;
      }
    }
    return answer;
}

// 약수를 구하는 조건이기 때문에 i의 조건은 1부터 시작하여 n 보다 작거나 같게 조건을 두고 
// n에서 나머지가 0인 i값을 구하여 누적 덧셈으로 반환시켰다.
