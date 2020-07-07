import {delay} from 'redux-saga';
// Kết nối saga với reducer
import {all, call, fork} from 'redux-saga/effects'

// import {sayHello, watchDecrement, watchIncrement} from './counterSaga';
import {watchFetchMovies, watchAddMovie, watchUpdateMovie} from './movieSaga';

export default function* rootSaga() {
    // Chạy tuần tự
    // yield all([
    //     sayHello,
    //     watchIncrement(),
    //     watchDecrement(),
    //     watchFetchMovies
    // ])

    // yield [
    //     fork(call(watchFetchMovies)),
    //     fork(call(watchAddMovie)),
    // ]
    yield all([
        call(watchFetchMovies),
        call(watchAddMovie),
        call(watchUpdateMovie)
    ])
}
