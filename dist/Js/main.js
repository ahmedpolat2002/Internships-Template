/* Header */
let iconMenu = document.querySelector("header i"),
  menuHeader = document.querySelector("header .menu");
let liAll = document.querySelectorAll("header .menu li");

iconMenu.addEventListener("click", () => {
  menuHeader.classList.toggle("hidden");
});

liAll.forEach((li) => {
  li.addEventListener("click", function () {
    menuHeader.classList.toggle("hidden");
  });
});
