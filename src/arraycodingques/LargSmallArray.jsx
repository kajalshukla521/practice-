//Find the largest and smallest element in an array.

function findLargestSmallest(arr){
    let largest =arr[0];
    let smallest = arr[0];
    
    for (let i =0; i< arr.length; i++){
        
        if (arr[i] > largest){
            largest= arr[i];
           
        }
        if(arr[i] < smallest){
             smallest= arr[i];
        }
    }
    return {largest, smallest}
}
const array = [3, 4, 7, 80, 85,3];
const result = findLargestSmallest( array);
console.log("largest number of the array",result.largest);
console.log("smallest number of the array", result.smallest);