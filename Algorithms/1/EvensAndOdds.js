function EvenOdd(arr) {
    for (i=1; i< arr.length-1; i++) {
        if ((arr[i-1] % 2 == 0) && (arr[i] % 2 == 0) && (arr[i+1] % 2 == 0)) {
            console.log("Even more so!")
        }
        if ((arr[i-1] % 2 == 1) && (arr[i] % 2 == 1) && (arr[i+1] % 2 == 1)) {
            console.log("That's odd!")
        }        
    }
}

arr = [1,2,4,6,8,3,5,7,4,5]
EvenOdd(arr)