
function countdown(input) {
    var arr = [];
    length = input;
    for (var i=0; i < length;i++) {
        arr[i] = input;
        input--;
    }
    return arr;
}

console.log(countdown(20));