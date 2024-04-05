function findMinValue(array){
    let minVal = array[0];
    for(i=1; i<= array.length; i++){
        if(array[i] < minVal){
            minVal = array[i];
        }
    }
    return minVal;
}

module.exports = {
    findMinValue
}
// let minimin = findMinValue([2,5,10,23,232]);
// console.log(minimin)