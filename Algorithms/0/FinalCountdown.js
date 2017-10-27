function countdown(mult, lowNum, highNum, except) {
    while (highNum > lowNum) {
        if (lowNum % mult == 0) {
            if (lowNum % except != 0)
                console.log(lowNum);
        }
        lowNum++;
    }
}

countdown(3,5,22,9)