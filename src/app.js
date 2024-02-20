/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let cardNumArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let randomNum = Math.floor(Math.random() * 13);
let suitArr = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
let randomSuitNum = Math.floor(Math.random() * 4);

window.onload = function() {
  document.querySelector(".numMiddle").innerHTML = `${cardNumArr[randomNum]}`;
  let top = document.querySelector(".top-left-icon");
  let bottom = document.querySelector(".top-right-icon");
  if (randomSuitNum == 2 || randomSuitNum == 3) {
    top.innerHTML = suitArr[randomSuitNum];
    top.style.color = "black";
    bottom.innerHTML = suitArr[randomSuitNum];
    bottom.style.color = "black";
  } else {
    top.innerHTML = suitArr[randomSuitNum];
    top.style.color = "red";
    bottom.innerHTML = suitArr[randomSuitNum];
    bottom.style.color = "red";
  }
};
