import React from 'react';
import {connect} from 'react-redux'
import {increaseAction, decreaseAction} from '../store/actions/CounterAction';
import CounterComponent from '../components/CounterComponent';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {onIncrement, onDecrement} = this.props;
        const {step} = this.props.counter;

        return (
            <CounterComponent
                step={step}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        )
    }
}

export default connect(
    state => {
        return {
            counter: state.counter
        };
    },
    dispatch => {
        return {
            onIncrement: step => {
                dispatch(increaseAction(step))
            },
            onDecrement: step => {
                dispatch(decreaseAction(step))
            }
        }
    }
)(CounterContainer)
