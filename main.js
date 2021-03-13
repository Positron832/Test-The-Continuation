let startBtn = document.getElementById("startBtn");

startBtn.onmouseover = function(){infoAppear()};
startBtn.onmouseout = function(){infoDissappear()};

function infoAppear() {
  let infoTxt = document.createElement("p");
  infoTxt.innerHTML = "Start the game?";
  document.body.appendChild(infoTxt);
}

function infoDissappear() {
  infoTxt.remove();
}
