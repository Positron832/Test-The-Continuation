let startBtn = document.getElementById("startBtn");

startBtn.onmouseover = function(){infoAppear()};
startBtn.onmouseout = function(){infoDissappear()};
let infoTxt = document.createElement("p");

function infoAppear() {
  infoTxt.textContent= "Start the game?";
  document.body.appendChild(infoTxt);
}

function infoDissappear() {
  infoTxt.remove();
}
