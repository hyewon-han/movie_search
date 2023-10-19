const movieCards = document.querySelector(".movie-cards");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZiMjU5MmNhZDYwYjczNDE5ZGE5ZTAzNTUyMzc3YyIsInN1YiI6IjY1MmY4ZGZjYzk5NWVlMDBlM2Y2YWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpBfTU-By6gAfRKlCi9cXE4PMVwy8KjOBVdHtjeduuQ",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const result = response.results;
    result.forEach((movie) => {
      addMovie(movie);
    });
  })
  .then(() => {
    searchMovie();
  })
  .catch((err) => console.error(err));

function addMovie(movie) {
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

function searchMovie() {
  const movieCard = movieCards.querySelectorAll(".movie-card");
  const searchValue = document.getElementById("search__value");
  const searchBtn = document.querySelector(".search__btn");

  function handleSearch(e) {
    e.preventDefault();
    let value = searchValue.value;
    movieCard.forEach((element) => {
      element.classList.remove("hidden");
      let movieTitle = element.childNodes[2].childNodes[1].innerText;
      // console.log(movieTitle);
      // console.log(value);
      if (!movieTitle.toLowerCase().includes(value)) {
        element.classList.add("hidden");
      }
    });
  }
  searchBtn.addEventListener("click", handleSearch);
}
