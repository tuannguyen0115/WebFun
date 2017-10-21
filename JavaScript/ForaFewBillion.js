var reward = 0.01;
for (var i=1; i < 30; i++) {
    reward*=2;
}
console.log("The reward after 30 days, starting from a penny is ", reward);

var days = 1;
var reward = 0.01;

var days_to_10k = 0;
var days_to_infinity = 0;

while (reward < Infinity) {
    if (reward > 10000 && days_to_10k == 0) {
        days_to_10k = days;
    }
    reward*=2;
    days++;
}
console.log("It would take", days_to_10k," days for the servant to make $10,000.");
console.log("It would take", days," days for the servant to make infinite money.");
