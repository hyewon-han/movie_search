const movieCards = document.querySelector(".movie-cards");

export function searchMovie() {
  const movieCard = movieCards.querySelectorAll(".movie-card");
  const searchValue = document.getElementById("search__value");
  const searchBtn = document.querySelector(".search__btn");

  function handleSearch(e) {
    e.preventDefault();
    let value = searchValue.value;

    movieCard.forEach((element) => {
      element.classList.remove("hidden");
      let movieTitle = element.childNodes[2].childNodes[1].innerText;

      if (!movieTitle.toLowerCase().includes(value.toLowerCase())) {
        element.classList.add("hidden");
      }
    });
  }
  searchBtn.addEventListener("click", handleSearch);
}
