var playerName = window.prompt("What is your Robot's Name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
var enemyHealth = 50;


// Game States
// "Win" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-Robot
// "Lose" - Player robot's health is zero or less


// alert players that they are starting a fight


    


var fight = function(enemyName) {

    

    // repeat an execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        var damage = randomNumber(playerAttack - 3, playerAttack);
        // subtract the value of  'player attack' from the value of 'enemy health' and use that result to update the value in the 'enemy health' variable
        enemyHealth = Math.max(0, enemyHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
         // check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = Math.max(0, playerHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )
       // check player's health
       if (playerHealth <=0) {
           window.alert(playerName + " has died!");
           break;
       }
       else {
           window.alert(playerName + " still has " + playerHealth + " health left.");
       }
       // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leaave fight
        if (confirmSkip) {
            window.alert(playerName + "has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
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

    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 20;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    var pickedEnemyName = enemyNames[i];
    enemyHealth = randomNumber(40, 60);
    fight(pickedEnemyName);

    if (playerHealth > 0 && i < enemyNames.length - 1) {

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

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
        if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 gold.")

        playerHealth = playerHealth + 30;
        playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough Money!");
        }
        break;

    case "UPGRADE":
    case "upgrade":
        if (playerMoney >= 7){
        window.alert("Upgrading player's attack by 6 for 7 gold.");

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough Money!");
        }
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


// start game when page loads

startGame();
