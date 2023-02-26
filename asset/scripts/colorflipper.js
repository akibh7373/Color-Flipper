"use strict";
// DOM Selection
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");

// Add Event Listener
btn.addEventListener("click", function () {
  // Take colors into an array
  const colors = ["green", "blue", "yellow", "red", "cyan"];
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
