"use strict";

// If Click On Play New Game, Resets The Game.
document.querySelector(".reset-one").addEventListener("click", function () {
  localStorage.setItem("A-Wins", 0);
  localStorage.setItem("B-Loses", 0);
  localStorage.setItem("C-Money", 1000);
  localStorage.setItem("E-Last-Bet", 0);
  localStorage.setItem("F-Avatar", "");
  localStorage.setItem("G-User", "");
});

const winx = localStorage.getItem("A-Wins");
const losesx = localStorage.getItem("B-Loses");
const lastBetx = localStorage.getItem("E-last-Bet");
const userx = localStorage.getItem("G-User");

if (winx >= 1 || losesx >= 1 || lastBetx >= 1 || userx) {
  document.querySelector(".resume-game").style.display = "block";
} else {
  document.querySelector(".resume-game").style.display = "none";
}
