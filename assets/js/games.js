var playerName = window.prompt("What is your Robot's Name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyAttack = 12;
var enemyHealth = 50;

var fight = function() {
    // alert players that they are starting a fight
    window.alert("Welcome to Robot Gladiators!");

    // subtract the value of  'player attack' from the value of 'enemy health' and use that result to update the value in the 'enemy health' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
     // check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
   // check player's health
   if (playerHealth <=0) {
       window.alert(playerName + " has died!");
   }
   else {
       window.alert(playerName + " still has " + playerHealth + " health left.");
   }





    };


fight();
