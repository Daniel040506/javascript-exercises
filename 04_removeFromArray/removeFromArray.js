const removeFromArray = function(arr) {

    if (arguments.length == 1) return arr;
    for (var i = 0; i < (arguments.length -1); i++) {
        while (arr.includes(arguments[i+1])){
            arr.splice(arr.indexOf(arguments[i+1]), 1);
        }   
        
    } 
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
