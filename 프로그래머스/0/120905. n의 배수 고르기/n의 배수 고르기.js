function solution(n, numlist) {
    var result = [];
    for(let i = 0; i < numlist.length; i++){
        if(numlist[i] % n === 0){
            result.push(numlist[i]);
        }
    }
    return result;
}