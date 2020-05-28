/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {connect} from 'react-redux'
import Counter from '../../components/Task/Counter';
import {addNumber, subNumber} from '../../store/actions/CouterAction'

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {number} = this.props.number
        const {addNumber, subNumber} = this.props

        return (
            <Counter
                val={number}
                addNumber={addNumber}
                subNumber={subNumber}
            />
        )
    }
}

export default connect(
    state => {
        return {
            number: state.number,
        };
    },
    dispatch => {
        return {
            addNumber: (index) => dispatch(addNumber(index)),
            subNumber: (index) => dispatch(subNumber(index)),
        }
    }
)(CounterContainer)
