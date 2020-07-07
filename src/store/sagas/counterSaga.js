import {INCREMENT, DECREMENT} from '../actions/action-types/CouterActionType';
import {delay} from 'redux-saga'
// Khi action thay doi se dc push vao 1 saga nao day
import {put, takeEvery} from 'redux-saga/effects';

export function* sayHello() {
    console.log("Hello word!")
}

function* increment() {
    console.log(`This is increment saga`)
}

function* decrement() {
    console.log(`This is decrement saga`)
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}


export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement)
}
