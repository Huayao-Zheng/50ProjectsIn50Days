const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
  const windowHeightTrigger = (window.innerHeight / 6) * 5;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < windowHeightTrigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
