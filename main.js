let startBtn = document.getElementById("startBtn");

startBtn.onmouseover = function(){infoAppear()}

function infoAppear() {
  let infoTxt = document.createElement("p");
  infoTxt.innerHTML = "Start the game?";
  document.body.appendChild(infoTxt);
}


