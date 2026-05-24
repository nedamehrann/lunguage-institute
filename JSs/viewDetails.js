const langList = document.getElementById("langList");
const examList = document.getElementById("examList");

function showExams(language) {
  // hide language list
  langList.style.display = "none";

  // show exam list
  examList.classList.remove("hidden");
}
