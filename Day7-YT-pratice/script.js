const allList = document.querySelectorAll(".list");

allList.forEach((list) => {
  list.addEventListener("mouseenter", () => list.classList.add("active"));
  list.addEventListener("mouseleave", () => list.classList.remove("active"));
});
