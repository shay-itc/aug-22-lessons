class Movie {
  constructor(movieObject) {
    this.apiKey = "87dd0709";
    this.title = movieObject.Title;
    this.poster = movieObject.Poster;
    this.id = movieObject.imdbID;
  }

  createMovieCard() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("custom-card");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", this.poster);
    cardImg.classList.add("card-img-top");

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("card-body");

    const h5Title = document.createElement("h5");
    h5Title.classList.add("card-title");
    h5Title.innerHTML = this.title;

    cardDiv.appendChild(cardImg);
    bodyDiv.appendChild(h5Title);
    cardDiv.appendChild(bodyDiv);

    cardDiv.addEventListener("click", () => {
      this.cardClicked();
    });

    return cardDiv;
  }

  async cardClicked() {
    console.log("cardClicked", this.title);

    if (!this.data) {
      console.log("Send request");
      this.data = await this.getMovieData();
    }

    const modal = document.getElementById("modal-container");
    modal.style.display = "block";
  }

  async getMovieData() {
    try {
      const url =
        "https://www.omdbapi.com/?apikey=" + this.apiKey + "&i=" + this.id;

      console.log("URL:", url);

      const response = await fetch(url);
      const result = await response.json();

      return result;
    } catch (error) {
      return false;
    }
  }
}

class MovieSearcher {
  constructor() {
    this.page = 1;
    this.apiKey = "87dd0709";
    this.searchType = "movie";
    this.searchQuery = "";

    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      this.runSearch();
    });
  }

  async getMovies() {
    try {
      const url =
        "https://www.omdbapi.com/?apikey=" +
        this.apiKey +
        "&type=" +
        this.searchType +
        "&s=" +
        this.searchQuery +
        "&page=" +
        this.page;

      console.log("URL:", url);

      const response = await fetch(url);
      const results = await response.json();

      return results.Search;
    } catch (error) {
      return [];
    }
  }

  async runSearch(e) {
    this.searchQuery = document.getElementById("search-input").value;

    const results = await this.getMovies();

    const container = document.getElementById("movies-container");

    const movieObjects = [];
    results.forEach((item) => {
      const movie = new Movie(item);
      movieObjects.push(movie);
      const card = movie.createMovieCard();

      container.appendChild(card);
    });
  }
}

let movieSearcher = null;
window.onload = () => {
  movieSearcher = new MovieSearcher();
};

// https://www.omdbapi.com/?
// apikey=87dd0709&
// type=movie
// &s=the%20lord%20of&
// page=2

const varA = true;

function myFunc() {
  if (varA == true) {
    console.log("Equals true");
  } else {
    console.log("Equals false");
  }
}

myFunc();
