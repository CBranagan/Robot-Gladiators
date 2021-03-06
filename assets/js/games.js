


// Game States
// "Win" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-Robot
// "Lose" - Player robot's health is zero or less


// alert players that they are starting a fight


    


var fight = function(enemy) {

   

    // repeat an execute as long as the enemy-robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        // subtract the value of  'player attack' from the value of 'enemy health' and use that result to update the value in the 'enemy health' variable
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
         // check enemy's health
        if (enemy.health <=0) {
            window.alert(enemy.name + " has died!");
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        )
       // check player's health
       if (playerInfo.health <=0) {
           window.alert(playerInfo.name + " has died!");
           break;
       }
       else {
           window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
       }
       // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leaave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
        // if no (false), ask question again by running fight() again
        else {
            promptFight;
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
            
    }
    };
}

var startGame = function() {

    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40, 60);
    fight(pickedEnemyObj);

    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            if (storeConfirm) {
                shop();
            } 
        
    }
} else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
}
endGame();
}

//endgame function

var endGame = function() {

    window.alert("The game has now ended. Let's see how you did!");

    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {

    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

switch (shopOptionPrompt) {

    case "REFILL":
    case "refill":
        playerInfo.refillHealth();
        break;

    case "UPGRADE":
    case "upgrade":
        playerInfo.upgradeAttack();
        break;

    case "LEAVE":
    case "leave":
        window.alert("Leaving the store.");
        break;
    
    default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
}
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 20,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >=7) {
        this.health += 20;
        this.money -= 7;
    } else {
        window.alert("You don't have enough gold!");
    }},
    upgradeAttack: function() {
        if (this.money >= 7) {
        this.attack += 7;
        this.money -= 7;
    } else {
        window.alert("You don't have enough gold!")
    }}
};

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


// start game when page loads

startGame();
