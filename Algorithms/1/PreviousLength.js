function PreviousLength(arr) {
    str =arr[0]
    arr[0] = 0
    if (arr.length < 2) {
        arr[0] = 0    
    }
    else {
        for (i=1; i<arr.length; i++) {
            length = str.length
            str = arr[i]
            arr[i] = length
        }
    }
    return arr
}

arr = ["qwe", "werr","ertyuy","asdasf"]

console.log(PreviousLength(arr))