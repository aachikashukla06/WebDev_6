function Bulb1ON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}
function Bulb1OFF() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
function Bulb1RED() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function Bulb1BLUE() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}
function Bulb1GREEN() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

document.getElementById("bulbRed").addEventListener("click", Bulb1RED);
document.getElementById("bulbBlue").addEventListener("click", Bulb1BLUE);
document.getElementById("bulbGreen").addEventListener("click", Bulb1GREEN);

document
  .getElementById("bulb1Color")
  .addEventListener("change", ChangeBulbColor);

function ChangeBulbColor() {
  const color = document.getElementById("bulb1Color").value;
  document.getElementById("ABCD").style.color = color;
}

  


function reset() {
  window.location.reload();
}