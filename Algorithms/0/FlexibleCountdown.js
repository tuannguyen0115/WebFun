function countdown(lowNum, highNum, mult) {
    while (highNum > lowNum) {
        console.log(highNum);
        highNum-=mult;
    }
}

countdown(2,9,3)