import {ADD_MOVIE, FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED, UPDATE_MOVIE, UPDATE_SUCCEEDED, UPDATE_FAILED} from './action-types/MovieActionType';

export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        newMovie,
    }
}

export const fetchMovieAction = (sort) => {
    return {
        type: FETCH_MOVIE,
        sort
    }
}

export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailAction = (error) => {
    return {
        type: FETCH_FAILED,
        payload: error
    }
}

export const updateMovieAction = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        updatedMovie
    }
}

export const updateSuccessAction = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        updatedMovie
    }
}

export const updateFailAction = (movie) => {
    return {
        type: UPDATE_MOVIE,
        movie
    }
}
