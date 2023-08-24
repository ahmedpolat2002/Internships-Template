let menu = document.querySelector(".dropdown .menu");
let filterHeader = document.querySelector(".dropdown .menu h3");
let list = document.querySelector(".dropdown .list");
let lis = Array.from(document.querySelectorAll(".dropdown .list ul li"));
let cards = Array.from(document.querySelectorAll(".cards .card"));

menu.addEventListener("click", checkTheList);

lis.forEach((li) => {
  li.addEventListener("click", () => {
    let text = li.textContent;
    filterHeader.innerHTML = text;

    manageCards(li.dataset.filter);
    checkTheList();
  });
});

function checkTheList() {
  menu.classList.toggle("active");
  list.classList.toggle("hidden");
}

function manageCards(filter) {
  cards.forEach((card) => {
    card.classList.add("hidden");
  });

  if (filter === "all") {
    cards.forEach((card) => {
      card.classList.remove("hidden");
    });
  } else {
    cards.forEach((card) => {
      if (card.classList.contains(filter)) {
        card.classList.remove("hidden");
      }
    });
  }
}
