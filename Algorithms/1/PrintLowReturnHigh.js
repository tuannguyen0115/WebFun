function PrintLowReturnHigh(arr) {
    min = arr[0]
    max = arr[0]
    for (i=1; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(min)
    return max
}

arr = [4,5,7,4,2]
console.log(PrintLowReturnHigh(arr))


