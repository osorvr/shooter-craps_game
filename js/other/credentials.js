"use strict";

// // // ***************
// // // Default Avatart
// // // ***************

// Defual Avatar Incase User Does Not Picks Another Avatar.
function defualtAvatar() {
  localStorage.setItem("F-Avatar", "👨🏽‍🎤");
}

// Calls Back defualtAvatar On Click.
addEventListener("click", defualtAvatar());

// // // **********************************
// // // Adds User Name To The LocalStorage
// // // **********************************

// Grabs The User id.
const userName = document.getElementById("userName");
// Grabs The Input Field
const input = document.querySelector("input");

// On Click setIems UserName To LocalStorage.
document.querySelector(".input-username").addEventListener("click", function () {
  // If Input field Has No Value.
  if (input.value.length === 0) {
    localStorage.setItem("G-User", "guest151");
  } else {
    localStorage.setItem("G-User", userName.value);
  }
});

// // // ********************************
// // // Adding Active To Current Avatart
// // // ********************************

// Grabs All Button Tags.
const btns = document.querySelectorAll(".avatar-box");
// Turns All Button To Array.
const btnsArray = Array.from(btns);

// Iterating Through All Buttons To Add & Remove .active
// *****************************************************

// Iterates Through All Buttons.
for (let i = 0; i < btns.length; i++) {
  // Makes Every Button Clickable & Adds Parameter.
  btns[i].addEventListener("click", function (btnElements) {
    // foreach Funtion for Buttons.
    btns.forEach((btn) => {
      // Creates Remove .active.
      btn.classList.remove("active");
    }); // End Of forEach.
    // Creates Add .active.
    btnElements.target.classList.add("active");
  }); // End Of Click Function.
} // End Of For Loop.

// // // *******************************
// // // Sets The Avatar To LocalStorage
// // // *******************************

// Grabs Each Span Tag.
const spans = document.querySelectorAll(".avatar-box");

// Iterates Through All Spans.
for (let i = 0; i <= spans.length; i++) {
  // Makes Every Span Clickable.
  spans[i].addEventListener("click", function () {
    // Calls Back Every Clickable "innerHTML".
    localStorage.setItem("F-Avatar", spans[i].innerHTML);
  });
}
