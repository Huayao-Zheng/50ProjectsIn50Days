const API_KEY = 'api_key=f0f104174970501943df661d92b61131';
const API_TYPE = '/discover/movie?sort_by=popularity.desc';
const API_URL = `https://api.themoviedb.org/3${API_TYPE}&${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?${API_KEY}&query="`;

const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const { results } = await res.json();

  showMovies(results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, vote_average, overview, poster_path } = movie;

    const movieElm = document.createElement('div');

    movieElm.classList.add('movie');

    movieElm.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      />
      <div class="movie-info">
        <h3>Movie Title</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
      `;

    main.appendChild(movieElm);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submited!!!');

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(`${SEARCH_API}${searchTerm}"`);

    search.value = '';
  } else {
    window.location.reload();
  }
});
