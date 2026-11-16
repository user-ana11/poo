import Movie from "./types/movie.js";

const movieList = document.querySelector("#movie-list");

async function loadMovies() {

    const response = await fetch("./data/moovies.json");

    const data = await response.json();

    const movies = data.map(movie => {

        return new Movie(
            movie.title,
            movie.director,
            movie.year,
            movie.rating
        );

    });

    movies.forEach(movie => {

        movieList.appendChild(movie.render());

    });

}

loadMovies();