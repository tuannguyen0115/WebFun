var count = 0;

for (var i=512; i<=4096; i++) {
    if (i % 5 == 0) {
        console.log(i);
        count++;
    }
}
console.log("Total number is: " + count);