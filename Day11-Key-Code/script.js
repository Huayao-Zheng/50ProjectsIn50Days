const insert = document.getElementById("insert");

window.addEventListener("keydown", ({ key, keyCode, code }) => {
  insert.innerHTML = `<div class="key" id="event-key">
  ${key === " " ? "Space" : key}
  <small>event.key</small>
</div>

<div class="key" id="event-keyCode">
  ${keyCode}
  <small>event.keyCode</small>
</div>

<div class="key" id="event-code">
  ${code}
  <small>event.code</small>
</div>`;
});
