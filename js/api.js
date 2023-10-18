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
    console.log(response.results["0"].poster_path);
    const base_url = "https://image.tmdb.org/";
    const file_size = "t/p/w500";
    const file_path = response.results["0"].poster_path;

    const movieTitle = document.querySelector(".movie-card__title");
    const moviePoster = document.querySelector(".movie-card__poster");
    movieTitle.innerText = response.results["0"].title;
    moviePoster.src = `${base_url}${file_size}${file_path}`;
  })
  .catch((err) => console.error(err));
