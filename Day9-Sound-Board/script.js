const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");

  btn.classList.add("btn");

  btn.innerHTML = sound;

  btn.addEventListener("click", () => {
    stopSounds();

    document.getElementById(sound).play();
  });

  document.getElementById("button").appendChild(btn);
});

function stopSounds() {
  sounds.forEach((sound) => {
    const curSound = document.getElementById(sound);

    curSound.pause();
    curSound.currentTime = 0;
  });
}

/*
  1.create a button elm for every sound
  2.give every button a click listener
    //when its clicked, play the sound
  3.append to button div
*/
