const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  function undateCounter() {
    const target = +counter.getAttribute("data-target");
    let c = +counter.innerText;
    const increment = target / 100;

    if (c < target) {
      counter.innerText = Math.ceil(c + increment);
      setTimeout(undateCounter, 10);
    } else {
      counter.innerText = target;
    }
  }

  undateCounter();
});
