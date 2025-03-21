const removeFromArray = function(originalArray, ...elementsToBeRemoved) {
    const result = originalArray.filter((element)=>{
        let notEqual = true;
        for(let removable of elementsToBeRemoved){
            if(removable === element){
                notEqual = false;
                break;
            }
        }
        return notEqual;
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
