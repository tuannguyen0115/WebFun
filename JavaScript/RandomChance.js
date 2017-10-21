var num_quarter = 100;
var coin_goal = 200;

function SlotMachine(num_quarter, coin_goal) {    
    if (coin_goal == undefined) {
        coin_goal = -1;
    }
    var random_num = Math.floor(Math.random()*50 + 50);
    console.log("If you win, you will get ", random_num," coins.");
    var slot_num = Math.floor(Math.random()*100);
    console.log("Slot machine number is ", slot_num);
    var player_num;
    while (num_quarter > 0) {
        player_num = Math.floor(Math.random()*100);
        console.log("Player rolled ",player_num);
        if (player_num == slot_num) {
            num_quarter = num_quarter + random_num;
            console.log("Player Win! You now have ", num_quarter, " quarters.");
            if (coin_goal == -1) {
                break;
            } else if (num_quarter >= coin_goal) {
                console.log("Player reached desired coins. Game will be over.");
                break;
            }
            slot_num = Math.floor(Math.random()*100);
            console.log("Slot machine number is ", slot_num);
        } else {
            num_quarter--;
            console.log("Player Lost! ", num_quarter, " quarters left.");
        }
    }
}
SlotMachine(num_quarter);
SlotMachine(num_quarter, coin_goal);
