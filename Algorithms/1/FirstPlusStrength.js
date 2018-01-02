function FirstPlusStrength(arr) {
    if (typeof(arr[0]) == "number") {
        return arr[0] + arr.length
    }
    else {
        return false
    }
}

arr = [1,2,3,4,5]
console.log(FirstPlusStrength(arr))
