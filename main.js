// <![CDATA[
"use strict";
let startBtn = document.getElementById("startBtn");
let credits = document.getElementById("credits");
let title = document.getElementById("menuTxt");
let titleMusic = document.getElementById("titleMusic");
let music = document.getElementById("music");

titleMusic.volume = 0.4;

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
let creditsTxt = document.createElement("p");
let backBtn = document.createElement("button");

function infoAppear() {
  infoTxt.textContent= "Start the game?";
  document.body.appendChild(infoTxt);
}

function infoAppear2() {
  infoTxt.textContent = "See credits";
  document.body.appendChild(infoTxt);
}

function showCredits() {
  creditsTxt.innerHTML = "Programming....Positron832<br\/>Title music......Semaphore";
  infoTxt.remove();
  startBtn.remove();
  credits.remove();
  backBtn.onclick = hideCredits();
  document.getElementById("btn-container1").appendChild(creditsTxt);
  document.body.appendChild(backBtn);
}

function hideCredits() {
  creditsTxt.remove();
  backBtn.remove();
  document.body.appendChild(startBtn);
  document.body.appendChild(credits);
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
