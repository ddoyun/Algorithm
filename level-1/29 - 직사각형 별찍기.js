// 문제 - 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 사항
// n과 m은 각각 1000 이하인 자연수입니다.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) {
        let stars = "";
        for (let j = 0; j < a; j++) {
          stars += "*";
        }
        console.log(stars);
    }
});

// b의 갯수 만큼 반복문을 돌리고, for문이 한번 돌아갈 때 마다 a 갯수 만큼 반복문을 돌린다.
// 콘솔로 변수 star을 찍는다
