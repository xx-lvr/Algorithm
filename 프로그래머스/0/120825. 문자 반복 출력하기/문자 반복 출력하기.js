function solution(my_string, n) {
    var answer = '';
    for (let char of my_string){
        answer += char.repeat(n);
    }
    return answer;
}