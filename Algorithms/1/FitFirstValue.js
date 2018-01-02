function FitFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!")
    }
    else if (arr[0] < arr.length) {
        console.log("Too small!")
    }
    else {
        console.log("Just right!")
    }
}

arr=[5,2,3,4,5]
FitFirstValue(arr)