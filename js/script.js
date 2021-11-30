"use strict";

// // // *********
// // // Variables
// // // *********

// Sets Pointer To None, Values After A Roll.
let pointer;
// Set The Shooter With 1,000.
let moneyRecords = 1000;

// Gets Loca Storage String Value.
const winsDisplay = localStorage.getItem("A-Wins");
const losesDisplay = localStorage.getItem("B-Loses");
const moneyDisplay = localStorage.getItem("C-Money");
const lastBetDisplay = localStorage.getItem("E-Last-Bet");
const avatarDisplay = localStorage.getItem("F-Avatar");
const userDisplay = localStorage.getItem("G-User");

// Displays Current Win, Lose, Money Counts.
document.querySelector(".wins-records").innerHTML = winsDisplay;
document.querySelector(".loses-records").innerHTML = losesDisplay;
document.querySelector(".money-records").innerHTML = moneyDisplay;
document.querySelector(".last-bet-records").innerHTML = lastBetDisplay;
document.querySelector(".user").innerHTML = `Hi, ${avatarDisplay} ${userDisplay}`;

// // // *************************************************
// // // Button Controlling Everything under "diceRollOne"
// // // *************************************************

document.getElementById("diceRollOne").addEventListener("click", function () {
  // Dice One Rolling 1 Throught 6.
  const diceOneRollNumber = Math.floor(Math.random() * 6) + 1;
  //
  // Dice One - QuerySelect All "die-List-1", *Check Html For Info.
  const diceOne = [...document.querySelectorAll(".die-list-1")];
  // For Each Loop For "die-list-1".
  diceOne.forEach((dieListOne, spin) => {
    // Toggles "die-roll-1" for Dice One.
    toggleClasses(dieListOne, spin);
    // Rolls Dice One From 1 Throught 6.
    dieListOne.dataset.roll = diceOneRollNumber;
  });

  // Dice Two Rolling 1 Throught 6.
  const diceTwoRollNumber = Math.floor(Math.random() * 6) + 1;

  // Dice Two - QuerySelect All "die-List-1", *Check Html For Info.
  const diceTwo = [...document.querySelectorAll(".die-list-2")];
  // For Each Loop For "die-list-2".
  diceTwo.forEach((dieListTwo, spin) => {
    // Toggles "die-roll-1" for Dice Two.
    toggleClasses(dieListTwo, spin);
    // Rolls Dice Two From 1 Throught 6.
    dieListTwo.dataset.roll = diceTwoRollNumber;
  });

  // Using A Function From Dice One And Dice Two.
  function toggleClasses(spin) {
    // Toggles Dice One.
    spin.classList.toggle("die-roll-1");
    // Toggles Dice Two.
    spin.classList.toggle("die-roll-2");
  }

  // Two Dices Combine Rolling Numbers 2 Through 12.
  const results = diceOneRollNumber + diceTwoRollNumber;

  // If Shooter Rolls 7, 11 On First Roll Then Wins Game.
  if (results === 7 || results === 11) {
    setTimeout(() => {
      // Display The Win Score
      document.querySelector(".roll-win-lose-pointer").innerHTML = results;
      // Description Of The Game
      document.querySelector(
        ".game-main-bottom-description"
      ).innerHTML = `You Rolled A ${results}. You Win 🤩.`;
      // Extra Functionality When Wins.
      winner();
      // Add Final Money.
      // moneyCount();
    }, 1500);
    // If Shooter Rolls 2, 3, 12 On First Roll Then Looses Game.
  } else if (results === 2 || results === 3 || results === 12) {
    setTimeout(() => {
      // Display The Lose Score
      document.querySelector(".roll-win-lose-pointer").innerHTML = results;
      // Description Of The Game
      document.querySelector(
        ".game-main-bottom-description"
      ).innerHTML = `You Rolled A ${results}. You Lost The Game 😵.`;
      // Extra Functionality When Loses.
      loses();
    }, 1500);
    // If Shooter Rolls 4, 5, 6, 8, 9, 10 On First Roll Then Its A Pointer, Keeping Rolling.
  } else {
    pointer = results;
    setTimeout(() => {
      // Displays The Pointer For The Next Roll.
      document.querySelector(".roll-win-lose-pointer").innerHTML = results;
      // Description For Shooter, What To Do Next.
      document.querySelector(
        ".game-main-bottom-description"
      ).innerHTML = `This Is Your Pointer ${results}. Roll Another ${results} To Win 	🙏, If You Roll A 7 You Lose 😨.`;
      // Removes First Button.
      document.querySelector("#diceRollOne").remove();
      // Add second Button.
      document.querySelector("#diceRollTwo").style.display = "block";
    }, 1500);
  }
});

// // // *************************************************
// // // Button Controlling Everything under "diceRollTwo"
// // // *************************************************

document.getElementById("diceRollTwo").addEventListener("click", function () {
  // Dice One Rolling 1 Throught 6.
  const diceOneRollNumber = Math.floor(Math.random() * 6) + 1;
  //
  // Dice One - QuerySelect All "die-List-1", *Check Html For Info.
  const diceOne = [...document.querySelectorAll(".die-list-1")];
  // For Each Loop For "die-list-1".
  diceOne.forEach((dieListOne, spin) => {
    // Toggles "die-roll-1" for Dice One.
    toggleClasses(dieListOne, spin);
    // Rolls Dice One From 1 Throught 6.
    dieListOne.dataset.roll = diceOneRollNumber;
  });

  // Dice Two Rolling 1 Throught 6.
  const diceTwoRollNumber = Math.floor(Math.random() * 6) + 1;

  // Dice Two - QuerySelect All "die-List-2", *Check Html For Info.
  const diceTwo = [...document.querySelectorAll(".die-list-2")];
  // For Each Loop For "die-list-2".
  diceTwo.forEach((dieListTwo, spin) => {
    // Toggles "die-roll-1" for Dice Two.
    toggleClasses(dieListTwo, spin);
    // Rolls Dice Two From 1 Throught 6.
    dieListTwo.dataset.roll = diceTwoRollNumber;
  });

  // Using A Function From Dice One And Dice Two.
  function toggleClasses(spin) {
    // Toggles Dice One.
    spin.classList.toggle("die-roll-1");
    // Toggles Dice Two.
    spin.classList.toggle("die-roll-2");
  }

  // Two Dices Combine Rolling Numbers 2 Through 12.
  const results = diceOneRollNumber + diceTwoRollNumber;

  // If Shooter Rolls Pointer, Then Wins Game.
  if (results === pointer) {
    setTimeout(() => {
      // Displays The Matched Roll For Pointer
      document.querySelector(".roll-match-pointer").innerHTML = results;
      // Description Of The Game
      document.querySelector(
        ".game-main-bottom-description"
      ).innerHTML = `You Rolled A ${results}. You Win 🤩.`;
      // Extra Functionality When Wins.
      winner();
      // Add Final Money.
      // moneyCount();
    }, 1500);
    // If Shooter Rolls 7 On Second Roll, Then Looses Game.
  } else if (results === 7) {
    setTimeout(() => {
      // Display The 7 To Lose The Game (Did Not Match Pointer).
      document.querySelector(".roll-match-pointer").innerHTML = results;
      // Description Of The Game
      document.querySelector(
        ".game-main-bottom-description"
      ).innerHTML = `You Rolled A ${results}. You Lose 😵.`;
      // Extra Functionality When Loses.
      loses();
    }, 1500);
  } else {
    setTimeout(() => {
      // Continues To Display Matched Pointer Untill Win Or Lose.
      document.querySelector(".roll-match-pointer").innerHTML = results;
    }, 1500);
  }
});

// // // ****************************************
// // // Functions For Win, Lost, Money And Reset
// // // ****************************************

// Winner Function.
function winner() {
  // Display The Shooter Modal After Wins Game.
  document.querySelector(".winner-modal").style.display = "flex";
  // Winner Button Option To Play Again.
  document.querySelector(".w-modal-btn").addEventListener("click", function () {
    localStorage.setItem("D-Final-Bet", 0);
    window.location.reload();
  });
  // Gets The Winning Record.
  let winsCount = parseInt(localStorage.getItem("A-Wins"));
  // Adds + To The Winning Record.
  localStorage.setItem("A-Wins", ++winsCount);

  // Turns Final-Bet To Intager.
  let shootersBet = parseInt(localStorage.getItem("D-Final-Bet"));

  // Turn D-Final-Bet To Intager.
  let bet = parseInt(shootersBet);

  // Turn C-Money To Intager.
  let money = parseInt(moneyDisplay);

  // Adds Both C-Money & D-Final-Bet.
  const winningResults = money + bet;

  // Sets The Final Amount.
  localStorage.setItem("C-Money", winningResults);
}

// Loses Function.
function loses() {
  // Display The Shooter Modal After Loses Game.
  document.querySelector(".loser-modal").style.display = "flex";
  // Loser Button Option To Play Again.
  document.querySelector(".l-modal-btn").addEventListener("click", function () {
    window.location.reload();
    localStorage.setItem("D-Final-Bet", 0);
  });
  // Gets The Winning Record
  let losesCount = parseInt(localStorage.getItem("B-Loses"));
  // Adds + To The Winning Record
  localStorage.setItem("B-Loses", ++losesCount);

  // Turns Final-Bet To Intager.
  let shootersBet = parseInt(localStorage.getItem("D-Final-Bet"));

  // Turn D-Final-Bet To Intager.
  let bet = parseInt(shootersBet);

  // Turn C-Money To Intager.
  let money = parseInt(moneyDisplay);

  // Adds Both C-Money & D-Final-Bet.
  const winningResults = money - bet;

  // Sets The Final Amount.
  localStorage.setItem("C-Money", winningResults);
}

// Reset Function.
function masterReset() {
  localStorage.setItem("A-Wins", 0);
  localStorage.setItem("B-Loses", 0);
  localStorage.setItem("C-Money", 1000);
  localStorage.setItem("E-Last-Bet", 0);
  localStorage.setItem("F-Avatar", "");
  localStorage.setItem("G-User", "");
  localStorage.setItem("D-Final-Bet", 0);
}

// Calling Back Master Reset For Reset Button On Options.
const reset1 = masterReset;

// Calling Back Master Reset For Reset Button On Losing All Money.
const resetAfterLosing = masterReset;

// Adding Reset 1 To Button.
document.querySelector(".reset-2").addEventListener("click", reset1);

// // // *************
// // // Betting Range
// // // *************

let slider = document.querySelector(".range");
let output = document.querySelector(".bet-range");

// Displays The Slider Default Value.
output.innerHTML = slider.value;

// Displays The Output Of The Slider.
slider.oninput = function () {
  output.innerHTML = slider.value;
};

// Button That Sets The Range Value.
document.querySelector(".make-bet").addEventListener("click", function () {
  // Turns C Money To Intager.
  let countsMoney = parseInt(localStorage.getItem("C-Money"));

  if (slider.value <= countsMoney && slider.value >= 1) {
    // Displays The Final Bet.
    document.querySelector(".final-bet").innerHTML = slider.value;
    // Sets The final Bet To Local Storage.
    localStorage.setItem("D-Final-Bet", slider.value);
    // Will Set The Last Bet To Local Storage.
    localStorage.setItem("E-Last-Bet", slider.value);

    // Hides The Final Bet From Any More Bets To Be Done
    document.querySelector(".make-bet").style.display = "none";
    // Displays The Locked Bet, No More Bets & Styling The Button.
    const lockedBet = document.querySelector(".bet-locked");
    lockedBet.style.display = "block";
    lockedBet.style.backgroundColor = "#080808";
    lockedBet.style.color = "#af383d";
    lockedBet.style.cursor = "not-allowed";

    // Hides The Free Roll Button.
    document.querySelector(".free-roll").style.display = "none";
    // Displays The "diceRollOne" Button, Ready To Play.
    document.getElementById("diceRollOne").style.display = "block";

    // Describes How Much Was The Bet.
    document.querySelector(
      ".game-main-bottom-description"
    ).innerHTML = `$${slider.value} Is Your Bet 🤝.`;

    // Makes A Function To Reset The Free Roll.
    function resetFreeRoll() {
      // Dice One - QuerySelect All "die-List-1", *Check Html For Info.
      const diceOne = [...document.querySelectorAll(".die-list-1")];
      // For Each Loop For "die-list-1".
      diceOne.forEach((dieListOne, spin) => {
        // Rolls Dice One From 1 Throught 6.
        dieListOne.dataset.roll = 1;
      });

      // Dice Two - QuerySelect All "die-List-1", *Check Html For Info.
      const diceTwo = [...document.querySelectorAll(".die-list-2")];
      // For Each Loop For "die-list-2".
      diceTwo.forEach((dieListTwo, spin) => {
        // Rolls Dice Two From 1 Throught 6.
        dieListTwo.dataset.roll = 1;
      });
    }
    // Call Back The resetFreeRoll Function.
    resetFreeRoll();
  } else {
    // Describes How Much Was The Bet.
    document.querySelector(
      ".game-main-bottom-description"
    ).innerHTML = `You Bet $${slider.value} You Cannot Afford To Play 😩.`;
  }
});

// // // ***********************************************
// // // Button Controlling Everything under "free-roll"
// // // ***********************************************

function freeRoll() {
  // Dice One - QuerySelect All "die-List-1", *Check Html For Info.
  const diceOne = [...document.querySelectorAll(".die-list-1")];
  // For Each Loop For "die-list-1".
  diceOne.forEach((dieListOne, spin) => {
    // Toggles "die-roll-1" for Dice One.
    toggleClasses(dieListOne, spin);
    // Rolls Dice One From 1 Throught 6.
    dieListOne.dataset.roll = Math.floor(Math.random() * 6) + 1;
  });

  // Dice Two - QuerySelect All "die-List-1", *Check Html For Info.
  const diceTwo = [...document.querySelectorAll(".die-list-2")];
  // For Each Loop For "die-list-2".
  diceTwo.forEach((dieListTwo, spin) => {
    // Toggles "die-roll-1" for Dice Two.
    toggleClasses(dieListTwo, spin);
    // Rolls Dice Two From 1 Throught 6.
    dieListTwo.dataset.roll = Math.floor(Math.random() * 6) + 1;
  });

  // Using A Function From Dice One And Dice Two.
  function toggleClasses(spin) {
    // Toggles Dice One.
    spin.classList.toggle("die-roll-1");
    // Toggles Dice Two.
    spin.classList.toggle("die-roll-2");
  }
}

// Call Back Free Roll.
const freeRolls = freeRoll;

// If you Click On Free Roll.
document.querySelector(".free-roll").addEventListener("click", freeRolls);

// // // ***********
// // // Page Loader
// // // ***********

window.addEventListener("load", function () {
  let loaderWrapper = document.querySelector(".loader-wrapper");

  loaderWrapper.parentElement.removeChild(loaderWrapper);
});

// // // ***********************************************
// // // IF Shooter Loses All His Money
// // // ***********************************************

// Turn C-Money To Intager.
let lostAllMoney = parseInt(moneyDisplay);

if (lostAllMoney === 0) {
  // Description For Shooter, What To Do Next.
  document.querySelector(
    ".game-main-bottom-description"
  ).innerHTML = `No Money 💀. Start Another Game Under Options.`;
}
