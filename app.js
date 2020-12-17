(function () {
  let button = document.getElementById("btn");
  let toast = document.querySelector(".toast");

  button.addEventListener("click", addNotific);

  function addNotific() {
    let notif = document.createElement("a");

    notif.innerText = "Notification";

    toast.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 3000);
  }
})();
