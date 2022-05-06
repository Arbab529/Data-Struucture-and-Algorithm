let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let searchValue = 10;
let left = 0;
let right = arr.length;


function BinarySearch(arr,left,right,searchValue) {
    if(right>=left){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]==searchValue){
            return mid;
        }
        if(arr[mid]>searchValue){
            return BinarySearch(arr,left,mid-1,searchValue)
        }
        return BinarySearch(arr,mid+1,right,searchValue)
    }
    return -1;
}


let result = BinarySearch(arr,left,right-1,searchValue);
document.write(result);