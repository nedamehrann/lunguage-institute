const form = document.getElementById("regForm");
const modal = document.getElementById("modal");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // show modal
  modal.style.display = "flex";

  // auto close after 2 seconds
  setTimeout(() => {
    modal.style.display = "none";
    form.reset();
  }, 2000);
});
