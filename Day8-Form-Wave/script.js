const lables = document.querySelectorAll(".form-control label");

lables.forEach((lable, idx) => {
  lable.innerHTML = lable.innerHTML
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
