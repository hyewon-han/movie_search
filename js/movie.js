const movieCards = document.querySelector(".movie-cards");

export function addMovie(movie) {
  const base_url = "https://image.tmdb.org/";
  const file_size = "t/p/w500";
  const file_path = movie.poster_path;
  const div = document.createElement("div");
  div.classList.add("movie-card");

  div.innerHTML = `<div class="movie-card__poster">
    <img src=${base_url}${file_size}${file_path} /></div>
  <div class="movie-card__content">
    <div class="movie-card__title">${movie.title}</div>
    <div class="movie-card__overview">${movie.overview}</div>
    <div class="movie-card__vote-average">Ratings : ${movie.vote_average}</div>
  </div>`;
  div.addEventListener("click", () => alert(`영화 id : ${movie.id}`));
  div.id = movie.id;
  movieCards.append(div);
}
