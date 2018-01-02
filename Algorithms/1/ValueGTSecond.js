function ValueGTSecond(arr) {
    total = 0
    for (i=0;i<arr.length;i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i])            
            total++
        }
    }
    return total
}

arr = [1,2,3,4,5]
console.log(ValueGTSecond(arr))