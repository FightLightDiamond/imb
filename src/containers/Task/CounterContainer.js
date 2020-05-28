/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {connect} from 'react-redux'
import Counter from '../components/Task/Counter';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(): * {

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: 0
    }
});

// Action
const addNumber = (addVal) => {
    return {
        type: 'ADD_NUMBER',
        value: addVal
    }
}

const subNumber = (subVal) => {
    return {
        type: 'SUB_NUMBER',
        value: subVal
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
