const searchDiv = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  searchDiv.classList.toggle("active");
  input.focus();
});
