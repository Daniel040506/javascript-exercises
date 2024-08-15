const palindromes = function (string) {
    let newStr = string.toLowerCase();
    newStr = newStr.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '');
    let reverseStr = newStr.split("").reverse().join("");
    return newStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
