import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY} from './action-types/CartActionType';

//add cart action
const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id,
    };
};
//remove item action
const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id,
    };
};
//subtract qt action
const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id,
    };
};
//add qt action
const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id,
    };
};

export {addToCart, removeItem, addQuantity, subtractQuantity}
