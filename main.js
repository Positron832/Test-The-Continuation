// <[!CDATA[
"use strict";
let startBtn = document.getElementById("startBtn");
let credits = document.getElementById("credits");
let title = document.getElementById("menuTxt");
let titleMusic = document.getElementById("titleMusic");

titleMusic.volume = 0.5;

document.body.onload = function(){bodyOnload()};
function bodyOnload() {
  titleMusic.play();
}

startBtn.onmouseover = function(){infoAppear()};
startBtn.onmouseout = function(){infoDissappear()};
credits.onmouseover = function(){infoAppear2()};
credits.onmouseout = function(){infoDissappear()};
credits.onclick = function(){showCredits()};
let infoTxt = document.createElement("p");

function infoAppear() {
  infoTxt.textContent= "Start the game?";
  document.body.appendChild(infoTxt);
}

function infoAppear2() {
  infoTxt.textContent = "See credits";
  document.body.appendChild(infoTxt);
}

function showCredits() {
  const creditsTxt = document.createElement("p")
  creditsTxt.innerHTML = "Programming....Positron832<br/>Title music......Semaphore";
  infoTxt.remove();
  startBtn.remove();
  credits.remove();
  const backBtn = document.createElement("button");
  backBtn.onclick = back();
  document.getElementById("btn-container1").appendChild(creditsTxt);
  document.body.appendChild(backBtn);
}

function infoDissappear() {
  infoTxt.remove();
}


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
