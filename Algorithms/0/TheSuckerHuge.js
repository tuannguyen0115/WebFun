function sum(num1, num2) {
    var total = 0;
    while (num1 <= num2) {
        if (num1 == num2)
            total = total + num1;
        else total = total + num1 + num2;
        num1++;
        num2--;
    }
    return total;
}

console.log(sum(-300000,300000));
console.log(sum(1,6));