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
    // const base_url = "https://image.tmdb.org/";
    // const file_size = "t/p/w500";
    // const file_path = result["0"].poster_path;
    // const movieTitle = document.querySelector(".movie-card__title");
    // const moviePoster = document.querySelector(".movie-card__poster");

    // movieTitle.innerText = result["0"].title;
    // moviePoster.src = `${base_url}${file_size}${file_path}`;

    // addMovie(result);
    result.forEach((element) => {
      console.log(element.title);
      addMovie(element);
    });
  })
  .catch((err) => console.error(err));

const movieCards = document.querySelector(".movie-cards");

function addMovie(element) {
  const base_url = "https://image.tmdb.org/";
  const file_size = "t/p/w500";
  const file_path = element.poster_path;
  const div = document.createElement("div");
  div.classList.add("movie-card");

  div.innerHTML = `<div>
  <img src=${base_url}${file_size}${file_path} class="movie-card__poster" />
</div>
<div class="movie-card__title">
  <span class="movie-card__title">${element.title}</span>
</div>
<div class="movie-card__overview">${element.overview}</div>
<div class="movie-card__vote-average">${element.vote_average}</div>`;
  movieCards.append(div);
}
