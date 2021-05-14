// <![CDATA[
"use strict";
const startBtn = document.getElementById("startBtn");
const credits = document.getElementById("credits");
const title = document.getElementById("menuTxt");
const titleMusic = document.getElementById("titleMusic");
const music = document.getElementById("music");

titleMusic.volume = 0.4;

document.body.onload = function() {titleMusic.play()}

startBtn.onmouseover = function() {
  infoTxt.textContent= "Start the game?";
  document.body.appendChild(infoTxt);
}

startBtn.onmouseout = function() {infoTxt.remove()}
credits.onmouseout = function() {infoTxt.remove()}

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
    document.getElementById("btn-container1").appendChild(startBtn);
    document.getElementById("btn-container1").appendChild(credits);
  }
  creditsTxt.innerHTML = "Programming....Positron832<br\/>Title music......Semaphore";
  document.getElementById("btn-container1").appendChild(creditsTxt);
  document.body.appendChild(backBtn);
}

const infoTxt = document.createElement("p");
const creditsTxt = document.createElement("p");
const backBtn = document.createElement("button");

const text1 = document.createElement("p");
  
startBtn.onclick = function() {
  titleMusic.pause();
  titleMusic.currentTime = 0;
  title.remove();
  startBtn.remove();
  credits.remove();
  infoTxt.remove();
  document.getElementById("btn-container1").remove();
  music.play();
  document.body.appendChild(text1);
}
// ]]>
