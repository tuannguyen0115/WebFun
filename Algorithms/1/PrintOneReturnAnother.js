function PrintOneReturnAnother(arr) {
    if (arr.length < 2) {
        console.log("Array only has 1 value")
        return false
    }
    else {
        console.log((arr[arr.length-2]))
        for (i=0; i<arr.length; i++) {
            if (arr[i] % 2 == 1) {
                return arr[i]
            }
        }
    }
}

arr=[2,3,4,5,6]
console.log(PrintOneReturnAnother(arr))