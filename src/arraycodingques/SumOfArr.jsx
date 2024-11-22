function findSumArr (arr){
    let sum = 0;
    for(let i=0; i< arr.length; i++ ){
        sum += arr[i];
    
    }
    return sum;
    
}


const array = [5,4,5,6,7,8,9];
const result = findSumArr(array);
console.log("sum of the array", result)