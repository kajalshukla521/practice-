function reverseArray(arr){
    let reverseArr=[];
    
    
    for(let i= arr.length -1 ; i>=0; i--){
       reverseArr.push(arr[i]);
    }
    return  reverseArr;
}

const array = [4,5,3,2,1,9];
const result=reverseArray (array);
console.log("reverse array", result)