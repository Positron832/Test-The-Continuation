// <![CDATA[
"use strict";
let startBtn = document.getElementById("startBtn");
let credits = document.getElementById("credits");
let title = document.getElementById("menuTxt");
let titleMusic = document.getElementById("titleMusic");
let music = document.getElementById("music");

titleMusic.volume = 0.4;

document.body.onload = function() {
  titleMusic.play();
}

startBtn.onmouseover = function() {
  infoTxt.textContent= "Start the game?";
  document.body.appendChild(infoTxt);
}

startBtn.onmouseout = function() {
  infoTxt.remove();
}
credits.onmouseout = function() {
  infoTxt.remove();
}

credits.onmouseover = function() {
  infoTxt.textContent = "See credits";
  document.body.appendChild(infoTxt);
}

credits.onclick = function() {
  startBtn.remove();
  credits.remove();
  infoTxt.remove();
  backBtn.textContent = "Back";
  backBtn.onclick = function() {
    creditsTxt.remove();
    backBtn.remove();
    document.body.appendChild(startBtn);
    document.body.appendChild(credits);
  }
  creditsTxt.innerHTML = "Programming....Positron832<br\/>Title music......Semaphore";
  document.getElementById("btn-container1").appendChild(creditsTxt);
  document.body.appendChild(backBtn);
}

let infoTxt = document.createElement("p");
let creditsTxt = document.createElement("p");
let backBtn = document.createElement("button");
  
startBtn.onclick = function(){startGame()}

function startGame() {
  titleMusic.pause();
  title.remove();
  startBtn.remove();
  credits.remove();
  infoTxt.remove();
  document.getElementById("btn-container1").remove();
  music.play();
}
// ]]>
