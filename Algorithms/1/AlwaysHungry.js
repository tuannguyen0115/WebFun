function AlwaysHungry(arr) {
    is_always = true
    for (i=0; i<arr.length; i++) {
        if (arr[i] == "food") {
            is_always = false
            arr[i] = "yummy"
        }
    }
    if (is_always) {
        console.log("I'm hungry")
    }
    return arr
}











arr = [1,2,4,6,8,3,5,7,4,"food",5]
console.log(AlwaysHungry(arr))