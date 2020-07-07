const urlMovie = 'http://localhost:3000/movies';

function* getMoviesFromAPI() {
    const res = yield fetch(urlMovie);

    return yield res.status === 200 ? res : [];
}

function fetchMovies() {
    return fetch(urlMovie)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

function* insertNewMovieFromAPI(newMovie) {
    return fetch(urlMovie, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newMovie),
    })
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

function* updateMovieFromAPI(updatedMovie) {
    return fetch(`${urlMovie}/${updatedMovie.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMovie),
    })
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

export const API = {
    // getMoviesFromAPI,
    fetchMovies,
    insertNewMovieFromAPI,
    updateMovieFromAPI,
};
