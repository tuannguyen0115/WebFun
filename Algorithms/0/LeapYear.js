function leapyear(year) {
    if (year%100 == 0)
        if (year%400 == 0)
            return true;
        else return false;
    if (year%4 == 0)
        return true;
    else return false;
}

for (var i = 890; i < 2018; i=i+10)
    if (leapyear(i))
        console.log(i + " is leap year.");
    else console.log(i + " is not leap year.");