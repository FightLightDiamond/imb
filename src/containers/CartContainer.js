import React from 'react';
import {connect} from 'react-redux'
import {addToCart, removeItem, addQuantity, subtractQuantity} from '../store/actions/CartAction'
import Cart from '../components/Cart'

class CartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {onAddToCart, onRemoveItem, onAddQuantity, onSubtractQuantity} = this.props
        const cart = this.props.cart

        return (
            <Cart
                cart = {cart}
                onAddToCart = {onAddToCart}
                onRemoveItem = {onRemoveItem}
                onAddQuantity = {onAddQuantity}
                onSubtractQuantity = {onSubtractQuantity}
            />
        )
    }
}

export default connect(
    state => {
        console.log('state.cart', state.cart)
        return {
            cart: state.cart
        };
    },
    dispatch => {
        return {
            onAddToCart: (id) => dispatch(addToCart(id)),
            onRemoveItem: (id) => dispatch(removeItem(id)),
            onAddQuantity: (id) => dispatch(addQuantity(id)),
            onSubtractQuantity: (id) => dispatch(subtractQuantity(id)),
        }
    }
)(CartContainer)
