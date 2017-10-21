function numbersOnly(arr) {
    var newArr = [];
    var i=0;
    while (i < arr.length) {
        if (typeof arr[i] == "number") {
            newArr.push(arr[i]);
        }
        i++;
    }
    return newArr;
}


var newArray = numbersOnly([1,"apple",-3,"orange",0.5,6,4,"-4"]);
console.log(newArray);
