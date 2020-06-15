const Item = 'https://pyrainfo.files.wordpress.com/2020/01/screenshot_20200109-220553.jpeg';

import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
} from '../actions/action-types/CartActionType';

const initState = {
    items: [
        {
            id: 1,
            title: 'Winter body',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 110,
            img: Item,
        },
        {
            id: 2,
            title: 'Adidas',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 80,
            img: Item,
        },
        {
            id: 3,
            title: 'Vans',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 120,
            img: Item,
        },
        {
            id: 4,
            title: 'White',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 260,
            img: Item,
        },
        {
            id: 5,
            title: 'Cropped-sho',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 160,
            img: Item,
        },
        {
            id: 6,
            title: 'Blues',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 90,
            img: Item,
        },
        {
            id: 7,
            title: 'Blues',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 90,
            img: Item,
        },
        {
            id: 8,
            title: 'Blues',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 90,
            img: Item,
        },
        {
            id: 9,
            title: 'Blues',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 90,
            img: Item,
        },
    ],
    addedItems: [],
    total: 0,

};
const cartReducer = (state = initState, action) => {
    // alert(action.type)
    let newTotal;
    let addedItem;

    switch (action.type) {
        case ADD_TO_CART:
            addedItem = state.items.find(item => item.id === action.id);
            //check if the action id exists in the addedItems
            let existedItem = state.addedItems.find(item => action.id === item.id);
            newTotal = state.total + addedItem.price;


            if (existedItem) {
                addedItem.quantity += 1;

                return {
                    ...state,
                    total: newTotal,
                };
            } else {
                addedItem.quantity = 1;

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal,
                };
            }

        case REMOVE_ITEM:
            let itemToRemove = state.addedItems.find(item => action.id === item.id);
            let addedItems = state.addedItems.filter(item => action.id !== item.id);

            //calculating the total
            newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);

            return {
                ...state,
                addedItems: addedItems,
                total: newTotal,
            };

        case ADD_QUANTITY:
            addedItem = state.items.find(item => item.id === action.id);
            addedItem.quantity += 1;
            newTotal = state.total + addedItem.price;

            return {
                ...state,
                total: newTotal,
            };

        case SUB_QUANTITY:
            addedItem = state.items.find(item => item.id === action.id);
            //if the qt == 0 then it should be removed
            if (addedItem.quantity === 1) {
                let addedItems = state.addedItems.filter(item => item.id !== action.id);
                let newTotal = state.total - addedItem.price;
                return {
                    ...state,
                    addedItems: addedItems,
                    total: newTotal,
                };
            }

            addedItem.quantity -= 1;
            newTotal = state.total - addedItem.price;

            return {
                ...state,
                total: newTotal,
            };

        case ADD_SHIPPING:
            return {
                ...state,
                total: state.total + 6,
            };

        case 'SUB_SHIPPING':
            return {
                ...state,
                total: state.total - 6,
            };
    }

    return state;
};

export default cartReducer;
