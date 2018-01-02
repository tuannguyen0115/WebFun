function double(arr) {
    for (i=0; i<arr.length; i++) {
        arr[i] = arr[i] * 2
    }
    return arr
}

arr = [1,2,3,4,5]
console.log(double(arr))