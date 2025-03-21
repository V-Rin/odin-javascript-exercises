const repeatString = function(inputString, numOfRepeats) {
    let result = "";

    if(numOfRepeats < 0){
        result = "ERROR";
        return result;
    }

    for (let i = 0; i < numOfRepeats; i++){
        result += inputString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
