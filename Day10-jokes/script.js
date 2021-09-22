const getMoreJokeBtn = document.getElementById("jokeBtn");
const jokeGoesHereDiv = document.getElementById("joke");

const config = {
  headers: { accept: "application/json" },
};

getMoreJokeBtn.addEventListener("click", async () => {
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  jokeGoesHereDiv.innerHTML = data.joke;
});
