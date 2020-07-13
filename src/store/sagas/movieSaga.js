import {
    call,
    put,
    // takeEvery,
    takeEvery,
} from 'redux-saga/effects';
import {
    FETCH_SUCCEEDED,
    FETCH_FAILED,
    FETCH_MOVIE,
    ADD_MOVIE,
    UPDATE_FAILED, UPDATE_SUCCEEDED, UPDATE_MOVIE,
    DELETE_MOVIE,
    DELETE_SUCCEEDED,
    DELETE_FAILED,
} from '../actions/action-types/MovieActionType';
import {API} from './API';

function* watchFetchMovies() {
    yield takeEvery(FETCH_MOVIE, function* () {
        try {
            const movies = yield call(API.fetchMovies);
            yield put({type: FETCH_SUCCEEDED, movies: movies});
        } catch (e) {
            console.log(e);
            yield put({type: FETCH_FAILED, e});
        }
    });
}

function* watchAddMovie() {
    yield takeEvery(ADD_MOVIE, function* (action) {
        try {
            const movies = yield call(API.insertNewMovieFromAPI, action.newMovie);
            yield put({type: FETCH_MOVIE, movies: movies});
        } catch (e) {
            yield put({type: FETCH_FAILED, e});
        }
    });
}

function* watchUpdateMovie() {
    yield takeEvery(UPDATE_MOVIE, function* (action) {
        try {
            const movies = yield call(API.updateMovieFromAPI, action.updatedMovie);
            yield put({type: UPDATE_SUCCEEDED, updatedMovie: action.updatedMovie});
        } catch (e) {
            yield put({type: UPDATE_FAILED, e});
        }
    });
}

function* watchDeleteMovie() {

    yield takeEvery(DELETE_MOVIE, function* (action) {

        console.log('watchDeleteMovie', action);
        try {
            const movies = yield call(API.deleteMovieFromAPI, action.id);
            yield put({type: DELETE_SUCCEEDED, id: action.id});
        } catch (e) {
            console.log(e);
            yield put({type: DELETE_FAILED, e});
        }
    });
}

export {watchFetchMovies, watchAddMovie, watchUpdateMovie, watchDeleteMovie};
