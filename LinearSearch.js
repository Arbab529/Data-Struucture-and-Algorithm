let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let searchValue = 10;
let arrayLength = arr.length-1;




function LinearSearch(arr,arrayLength,searchValue) {
    for (let i = 0; i < arrayLength; i++) {
        if(arr[i] == searchValue){
            return i;
        }     
    }
    return -1;
}

let result = LinearSearch(arr,arrayLength,searchValue);
document.write(result);