function printRange(start, end, skip)
{
    if (skip == undefined)
    {
        skip = 1;
    }
    if (end == undefined)
    {
        end = start;
        start = 0;
    }
    for (var i=start; i< end; i=i+skip)
    {
        console.log(i);
    }
}

console.log("printRange(2,10,2):");
printRange(2,10,2);
console.log("printRange(4,8):");
printRange(4,8);
console.log("printRange(4):");
printRange(4);
