const urlMovie = 'http://localhost:3000/movies';

function* getMoviesFromAPI() {
    const res = yield fetch(urlMovie);

    return yield res.status === 200 ? res : [];
}

const fetchMovies = async () => {
    return await fetch(urlMovie)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

const insertNewMovieFromAPI = async newMovie => {
    return await fetch(urlMovie, {
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

const updateMovieFromAPI = async (updatedMovie) => {
    return await fetch(`${urlMovie}/${updatedMovie.id}`, {
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

const deleteMovieFromAPI = async (id) => {
    return await fetch(`${urlMovie}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: '',
    })
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

export const API = {
    // getMoviesFromAPI,
    deleteMovieFromAPI,
    fetchMovies,
    insertNewMovieFromAPI,
    updateMovieFromAPI,
};
