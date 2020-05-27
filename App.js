import React from 'react';
import {AppNavigator} from './src/AppNavigator';

// import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {create} from 'react-native/jest/renderer';
// const store = createStore(cartReducer);

/**
 * Test redux
 * @type {{number: number, history: [number], errorMsg: string}}
 */

// State: dữ liệu
let appState = {
    number: 1,
    history: [1],
    errorMsg: '',
};

// Action: sự kiện
const add = {
    type: 'ADD',
    payload: 1,
};

const sub = {
    type: 'SUB',
    payload: 1,
};
// Reducer: tổng hợp xử lý
const numberReducer = (state = appState, action) => {
    let newValue;

    switch (action.type) {
        case 'ADD':
            //immutable state
            newValue = state.number + action.payload;
            state = {
                ...state,
                history: [...state.history, newValue],
                number: newValue,
            };
            break;
        case 'SUB':
            newValue = state.number - action.payload;
            state = {
                ...state,
                history: [...state.history, newValue],
                number: newValue,
            };
            break;
        // default: throw new Error('Action invalid')
    }

    return state;
};

const errorReduces = (state = appState, action) => {
    switch (action.type) {
        case 'LESS_THAN_ZERO':
            state = {
                ...state,
                errorMsg: 'Number can not be less than zero',
            };
    }

    return state;
};


// Middleware
const loggerMiddleware = store => next => action => {
    console.log('State loggerMiddleware', store.getState());

    next(action);

    console.log('State updated', store.getState());
};

const checkIsZeroMiddleware = store => next => action => {
    const currentNumber = store.getState().number.number;

    if (currentNumber === 0) {
      // Sự kiện chuyển hướng
      console.log('Action redirect to LESS_THAN_ZERO');
        next({type: 'LESS_THAN_ZERO'});
    } else {
        next(action);
    }
};

// Store: điểm duy nhất trong ứng dụng
const reducers = combineReducers({number: numberReducer, error: errorReduces});
const store = createStore(reducers, applyMiddleware(thunk, loggerMiddleware, checkIsZeroMiddleware));

// store.subscribe(() => {
//     console.log('State updated', store.getState());
// });

// Test: gọi action
const addAfter3s = () => {
    return dispatch => {
        setTimeout( () => {
            store.dispatch(add);
        }, 3000)
    }
}

store.dispatch(addAfter3s())

// store.dispatch(sub);
// store.dispatch(sub);
// store.dispatch(add);
// store.dispatch(sub);
// store.dispatch({type: 'LESS_THAN_ZERO'});
// store.dispatch(sub)
// store.subscribe(sub)

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
    }

    render() {
        return (
            <AppNavigator/>
        );
    }
}


