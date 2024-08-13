const sumAll = function(num1, num2) {
    let answer = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return "ERROR";
    if (num2 < num1) {
        for (var i = num2; num2 <= num1; num2++) {
            answer+= num2;
        }
        return answer
    }
    
    for (var i = num1; num1 <= num2; num1++) {
        answer+= num1;
    }
    return answer
};

// Do not edit below this line
module.exports = sumAll;
