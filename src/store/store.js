import {applyMiddleware, combineReducers, createStore} from 'redux';
import AudioReducer from './reducers/AudioReducer';
import CartReducer from './reducers/CartReducer';
import CounterReducer from './reducers/CounterReducer'
import LessonReducer from './reducers/LessonReducer';
import NumberReducer from './reducers/NumberReducer';
import TaskListReducer from './reducers/TaskListReducer';
import MovieReducer from './reducers/MovieReducer'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import rootSaga from './sagas/routeSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = {
    audio: AudioReducer,
    cart: CartReducer,
    counter: CounterReducer,
    taskList: TaskListReducer,
    movie: MovieReducer,
    number: NumberReducer,
    lesson: LessonReducer,
};

const middleware = applyMiddleware(thunk, sagaMiddleware);

const store = createStore(combineReducers(reducers), middleware);

sagaMiddleware.run(rootSaga);

export default store;
