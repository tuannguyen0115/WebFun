function countPositive(arr) {
    count = 0
    for (i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
    }
    arr[arr.length-1] = count
    return arr
}

arr = [1,2,3,4,3]
console.log(countPositive(arr))