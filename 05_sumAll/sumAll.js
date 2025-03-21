const sumAll = function(startNum, endNum){
    if((typeof startNum !== "number")||(typeof endNum !== "number")
        ||(!Number.isInteger(startNum))||(!Number.isInteger(endNum))
            ||(startNum < 0)||(endNum < 0)){
                return "ERROR";
    }

    let start;
    let end;
    let sum = 0;

    if(startNum >= endNum){
        start = endNum;
        end = startNum;
    }else{
        start = startNum;
        end = endNum;
    }

    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
