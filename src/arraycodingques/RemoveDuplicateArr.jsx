function removeDuplicates(arr){
    let uniqueArray =[];
    for (let i=0; i<arr.length; i++){
        if(uniqueArray.indexOf(arr[i])===-1)
        uniqueArray.push(arr[i]);
    }
    return uniqueArray;
}
const array = [33,5,2,4,3,2,9];
const uniqueArray = removeDuplicates(array);
console.log("remove duplicate", uniqueArray);