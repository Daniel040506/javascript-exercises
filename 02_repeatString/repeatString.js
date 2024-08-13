const repeatString = function(string, num) {
    let str = "";

    if (num < 0) return "ERROR";
    for (var i = 0; i < num; i++) {
        str = str.concat(string);
    }

    return str;

};

// Do not edit below this line
module.exports = repeatString;
