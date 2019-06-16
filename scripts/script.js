function showSection(s, n) {
  var section = document.getElementById(s);
  var overlay = document.getElementsByClassName("overlay-effect")[n];
  overlay.style.left = 0;
  overlay.style.transition = ".25s linear";
  section.style.left = 0;
  section.style.transition = ".28s linear";
}

function hideSection(s, n) {
  var section = document.getElementById(s);
  var overlay = document.getElementsByClassName("overlay-effect")[n];
  section.style.left = "100%";
  section.style.transition = ".25s linear";
  overlay.style.left = "100%";
  overlay.style.transition = ".28s linear";
}
