const searchValue = document.getElementById("search__value");
const searchBtn = document.querySelector(".search__btn");
const title = document.querySelectorAll(".movie-card__title");
console.log(title);

function handleSearch(e) {
  e.preventDefault();
  let value = searchValue.value;
  console.log(value);
}

searchBtn.addEventListener("click", handleSearch);
