import {applyMiddleware, combineReducers, createStore} from 'redux';
import CartReducer from './reducers/CartReducer';
import LessonReducer from './reducers/LessonReducer';
import TaskListReducer from './reducers/TaskListReducer';
import numberReducer from './reducers/NumberReducer';
import thunk from 'redux-thunk';

const reducers = {
    cart: CartReducer,
    taskList: TaskListReducer,
    number: numberReducer,
    lesson: LessonReducer,
}

const middleware = applyMiddleware(thunk)

const store = createStore(combineReducers(reducers), middleware);

export default store;
