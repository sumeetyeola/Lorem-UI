const modal = document.querySelector(".modal-container");
const btn = document.querySelector("#btn-modal");
const btnClose = document.querySelector("#btn-close-modal");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

btnClose.onClick = () => {
  modal.style.display = "none";
};

window.onClick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
