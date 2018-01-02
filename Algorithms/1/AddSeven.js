function AddSeven(arr) {
    if (arr.length < 2) {
        console.log("Array only has 1 element")
        return false
    }
    else {
        new_arr = []
        for (i=1; i<arr.length; i++) {
            new_arr.push(arr[i]+7)
        }
        return new_arr
    }
}








arr = [1,2,4,6,8,3,5,7,4,5]
console.log(AddSeven(arr))