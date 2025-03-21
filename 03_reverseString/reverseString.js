const reverseString = function(stringInput) {
    let stringChars = stringInput.split("");
    let result = "";
    
    for(let i = stringChars.length - 1; i >= 0; i--){
        result += stringChars[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
