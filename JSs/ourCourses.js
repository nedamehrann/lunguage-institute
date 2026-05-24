const langList = document.getElementById("langList");
const levelList = document.getElementById("levelList");

function showLevels(language) {
  // hide languages
  langList.style.display = "none";

  // show levels
  levelList.style.display = "block";
}

function goRegister() {
  window.location.href = "registration.html";
}
