var x = 1;
function switchImg() {
  if (x == 1) { 
    document.getElementById("bookmark").src = "assets/selected.png";
    x++; 
  } else if (x == 2) {
    document.getElementById("bookmark").src = "assets/unselected.png";
    x = 1;
  }
}