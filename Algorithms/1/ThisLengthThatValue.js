function ThisLengthThatValue(num1, num2) {
    if (num1 == num2) {
        console.log("Jinxed!")
        return false
    } 
    else {
        new_arr = []
        for (i=0; i<num1; i++) {
            new_arr.push(num2)
        }
        return new_arr
    }

}

console.log('------------------------------------');
console.log(ThisLengthThatValue(5,4));
console.log('------------------------------------');