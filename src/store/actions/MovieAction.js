import {
    ADD_MOVIE, FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED, UPDATE_MOVIE,
    UPDATE_SUCCEEDED,
    DELETE_MOVIE,
    DELETE_SUCCEEDED, DELETE_FAILED, UPDATE_FAILED,
} from './action-types/MovieActionType';

const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        newMovie,
    }
}

const fetchMovieAction = (sort) => {
    return {
        type: FETCH_MOVIE,
        sort
    }
}

const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

const fetchFailAction = (error) => {
    return {
        type: FETCH_FAILED,
        payload: error
    }
}

const updateMovieAction = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        updatedMovie
    }
}

const updateSuccessAction = (updatedMovie) => {
    return {
        type: UPDATE_SUCCEEDED,
        updatedMovie
    }
}

const updateFailAction = (movie) => {
    return {
        type: UPDATE_FAILED,
        movie
    }
}

const delMovieAction = (id) => {
    return {
        type: DELETE_MOVIE,
        id
    }
}

const delSuccessAction = (id) => {
    return {
        type: DELETE_SUCCEEDED,
        id
    }
}

const delFailAction = (movie) => {
    return {
        type: DELETE_FAILED,
        id
    }
}

export {
    addMovieAction,
    fetchMovieAction,
    fetchSuccessAction,
    fetchFailAction,
    updateMovieAction,
    updateSuccessAction,
    updateFailAction,
    delMovieAction,
    delSuccessAction,
    delFailAction
}
