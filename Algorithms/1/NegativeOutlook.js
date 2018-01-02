function NegativeOutlook(arr) {
    new_arr = []
    for (i=0; i<arr.length; i++) {
        new_arr.push(-Math.abs(arr[i]))
    }
    return new_arr
}

arr = [1,2,4,6,8,3,5,7,4,5]
console.log(NegativeOutlook(arr))