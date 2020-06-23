import {applyMiddleware, combineReducers, createStore} from 'redux';
import AudioReducer from './reducers/AudioReducer';
import CartReducer from './reducers/CartReducer';
import LessonReducer from './reducers/LessonReducer';
import NumberReducer from './reducers/NumberReducer';
import TaskListReducer from './reducers/TaskListReducer';

import thunk from 'redux-thunk';

const reducers = {
    audio: AudioReducer,
    cart: CartReducer,
    taskList: TaskListReducer,
    number: NumberReducer,
    lesson: LessonReducer,
};

const middleware = applyMiddleware(thunk);

const store = createStore(combineReducers(reducers), middleware);

export default store;
