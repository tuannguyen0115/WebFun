function IncrementSecond(arr) {
    if (arr.length < 2) {
        console.log("Array has only 1 element")
        return false
    }
    else {
        arr[1] = arr[1] + 1
        for (i=0; i<arr.length; i++) {
            console.log(arr[i])
        }
        return arr
    }
}

arr = [1,2,4,6,8,3,5,7,4,5]
console.log(IncrementSecond(arr))