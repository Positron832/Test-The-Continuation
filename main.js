let startBtn = document.getElementById("startBtn");
let credits = document.getElementById("credits");
let title = document.querySelector("h1");

startBtn.onmouseover = function(){infoAppear()};
startBtn.onmouseout = function(){infoDissappear()};
credits.onmouseover = function(){infoAppear2()};
credits.onmouseout = function(){infoDissappear()};
let infoTxt = document.createElement("p");

function infoAppear() {
  infoTxt.textContent= "Start the game?";
  document.body.appendChild(infoTxt);
}

function infoAppear2() {
  infoTxt.textContent = "See credits";
  document.body.appendChild(infoTxt);
}

function infoDissappear() {
  infoTxt.remove();
}

startBtn.onclick = function() {
  titleMusic.pause();
  title.remove();!(
  startBtn.remove();
  credits.remove();
  music.play();
}
