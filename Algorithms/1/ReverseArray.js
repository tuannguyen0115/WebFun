function ReverseArray(arr) {
    for (i=0; i<arr.length/2; i++) {
        // a = [b, b = a][0]
        arr[i] = [arr[arr.length-1-i], arr[arr.length-1-i] = arr[i]][0];
    }
    return arr
}

arr = [1,2,4,6,8,3,5,7,4,5]
console.log(ReverseArray(arr))