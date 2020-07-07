import {INCREMENT, DECREMENT} from '../actions/action-types/CouterActionType';

const counterState = {
    step: 0
};

const CounterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, step: state.step + action.step};
        case DECREMENT:
            return {...state, step: state.step - action.step};
    }

    return state;
};

export default CounterReducer;
