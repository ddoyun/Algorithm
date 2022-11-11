// 문제
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
// 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

// 입출력
// nums	        result
// [1,2,3,4]	  1
// [1,2,7,6,4]	4

function solution(nums) {
    let count = 0;
    function prime(number) {
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) return false;
        }
        return true;
    }
    
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          let number = nums[i] + nums[j] + nums[k];
          if(number % 2 !== 0 && prime(number)) count++;
        }
      }
    }
    return count;
}

// 풀이
// 먼저 3개씩 조합이 가능한 모든 수 중에서 소수가 되는 수의 개수를 찾기 때문에 3중 for문을 사용하여
// 조합이 가능한 모든 수를 반복문으로 돌린다. 그리고 number 변수에 모든 경우의 수로 3번 더한 수를 배열에 담는다.
// 그리고 소수를 판별해주는 함수 prime를 만들어 number을 매개변수로 받는다.
// number 값이 i로 나눴을때 0이면 false를 반환하고 아닐 경우 true를 반환한다. 
// 그리고 다시 3중 for문으로 돌아가서 if 문 number 가 2의 배수가 아닐 때, 자기 자신이 나눠질 때 카운트를 증가시킨다.

