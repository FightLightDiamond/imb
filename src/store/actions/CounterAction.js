import {INCREMENT, DECREMENT} from './action-types/CouterActionType';

export const increaseAction = step => {
    return {
        type: INCREMENT,
        step: step
    }
}

export const decreaseAction = step => {
    return {
        type: DECREMENT,
        step: step
    }
}
