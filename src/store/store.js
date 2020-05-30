import {applyMiddleware, combineReducers, createStore} from 'redux';
import cartReducer from './reducers/CartReducer';
import taskListReducer from './reducers/TaskListReducer';
import numberReducer from './reducers/NumberReducer';
import thunk from 'redux-thunk';

const reducers = {
    cart: cartReducer,
    taskList: taskListReducer,
    number: numberReducer
}

const middleware = applyMiddleware(thunk)

const store = createStore(combineReducers(reducers), middleware);

export default store;
