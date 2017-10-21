var name = ["James","Jill","Jane","Jack"];

function FancyArray(name, symbol, reversed) {
    if (reversed == undefined) {
        reversed = false;
    }
    if (reversed == false) {
        for (var i=0; i < name.length; i++)
        {
            console.log(i," ",symbol," ",name[i]);
        }
    } else {
        for (var i=name.length-1; i>=0; i--)
        {
            console.log(i," ",symbol," ",name[i]);
        }
    }
}

FancyArray(name, "->", true);
