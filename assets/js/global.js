// SELECTING PRIMARY PURPOSE FUNCTIONALITY
const cardsPurpose = document.querySelectorAll(".card--purpose");
console.log(cardsPurpose);

function clearActiveClass() {
  cardsPurpose.forEach((card) => {
    card.classList.remove("active");
  });
}

cardsPurpose.forEach((card) => {
  card.addEventListener("click", (e) => {
    clearActiveClass();
    const clickCardEl = e.target.closest(".card--purpose");
    clickCardEl.classList.add("active");
  });
});
