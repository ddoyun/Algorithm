// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.match(/[a-z]*\d*\.*\-*\_*/g).join('');
    new_id = new_id.replace(/\.{2,}/g, '.');
    new_id = new_id.replace(/^\.|\.$/g, '');
    if(new_id.length === 0) new_id = 'a';
    if(new_id.length >= 16) new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/g, '');
    if (new_id.length <= 2) {
        const last = new_id.charAt(new_id.length - 1);
        while(new_id.length < 3){
            new_id += last;
        }
    }
    return new_id;
}
