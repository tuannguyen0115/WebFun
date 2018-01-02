function ValueGTSecond(arr) {
    total = 0
    new_arr = []
    if (arr.length < 2) {
        console.log("Array has only 1 element. ")
        return false
    }
    else {
        for (i=0; i<arr.length; i++) {
            if (arr[i] > arr[1]) {
                total++
                new_arr.push(arr[i])                
            }
        }
        console.log("Total elements that are greater than 2nd value: " + total)
        return new_arr
    }
}

arr = [1,2,3,4,5]
console.log(ValueGTSecond(arr))