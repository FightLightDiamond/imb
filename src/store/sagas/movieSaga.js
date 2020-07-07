import {
    // call,
    put,
    // takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import {
    FETCH_SUCCEEDED,
    FETCH_FAILED,
    FETCH_MOVIE,
    ADD_MOVIE,
    UPDATE_FAILED, UPDATE_SUCCEEDED, UPDATE_MOVIE,
} from '../actions/action-types/MovieActionType';
import {API} from './API';

// function * fetchMovies() {
//     console.log('fetchMovies')
//     try {
//         const movies = yield API.getMoviesFromAPI()
//         console.log('fetchMovies', movies)
//         yield put({type: FETCH_SUCCEEDED, movies: movies})
//     } catch (e) {
//         console.log(e)
//         yield put({type: FETCH_FAILED, e})
//     }
// }

function* fetchMovies() {
    try {
        const movies = yield (API.fetchMovies());
        console.log(movies);
        yield put({type: FETCH_SUCCEEDED, movies: movies});
    } catch (e) {
        yield put({type: FETCH_FAILED, e});
    }
}

function* addNewMovie(action) {
    try {
        const movies = yield (API.insertNewMovieFromAPI(action.newMovie));
        yield put({type: FETCH_MOVIE, movies: movies});
    } catch (e) {
        yield put({type: FETCH_FAILED, e});
    }
}

function* updateMovie(action) {
    try {
        const movies = yield (API.updateMovieFromAPI(action.updatedMovie));
        yield put({type: UPDATE_SUCCEEDED, updatedMovie: action.updatedMovie});
    } catch (e) {
        yield put({type: UPDATE_FAILED, e});
    }
}

export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIE, fetchMovies);
}

export function* watchAddMovie() {
    yield takeLatest(ADD_MOVIE, addNewMovie);
}


export function* watchUpdateMovie() {
    yield takeLatest(UPDATE_MOVIE, updateMovie);
}
