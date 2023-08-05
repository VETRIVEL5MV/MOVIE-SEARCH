let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  }
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response == "True") {
          result.innerHTML = `
  <div class="info">
  <div>
  <h2>${data.Title}</h2>
  <div class="rating">
    <h4>${data.imdbRating}</h4>
  </div>
  <div class="details">
  <span>${data.Year}</span>
  </div>
  <div class="genre">
  <div>${data.Genre}</div>
  </div>
  </div>
  </div>
  <img src='${data.Poster}'>
  <h3>Plot:</h3>
  <p>${data.Plot}</p>
  <h3>Cast:</h3>
  <p>${data.Actors}</p>
  `;
        }
        else {
          result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};
key = "59f48ee4";
searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
