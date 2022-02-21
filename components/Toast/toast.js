let showSuccessToast = document.getElementById("show-success-toast");
showSuccessToast.addEventListener("click", () => {
  console.log("Working");
  let successToast = document.getElementById("success-toast");

  successToast.className = "show";

  setTimeout(function () {
    successToast.className = successToast.className.replace("show", "");
  }, 3000);
});

let showWarningToast = document.getElementById("show-warning-toast");
showWarningToast.addEventListener("click", () => {
  let warningToast = document.getElementById("warning-toast");

  warningToast.className = "show";

  setTimeout(function () {
    warningToast.className = warningToast.className.replace("show", "");
  }, 3000);
});

let showDangerToast = document.getElementById("show-danger-toast");
showDangerToast.addEventListener("click", () => {
  let dangerToast = document.getElementById("danger-toast");

  dangerToast.className = "show";

  setTimeout(function () {
    dangerToast.className = dangerToast.className.replace("show", "");
  }, 3000);
});
