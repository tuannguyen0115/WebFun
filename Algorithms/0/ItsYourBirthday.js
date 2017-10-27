const bday_month = 1;
const bday_day = 15;
function bday(num1, num2) {
    if ((num1 == bday_month && num2 == bday_day) || (num2 == bday_month && num1 == bday_day)) 
        console.log("How did you know?");
    else console.log("Just another day....");
}


bday(15,1);
bday(1,15);
bday(11,5);
bday(5,11);
bday(1,1);
bday(15,15);

