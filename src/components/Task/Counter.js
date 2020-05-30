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

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {val, addNumber, subNumber} = this.props

        return (
            <View style={styles.addView}>
                <Button onPress={() => addNumber(val)} title={"Add"} />
                <Text>Counter: {val}</Text>
                <Button onPress={() => subNumber(val)} title={"Sub"} />
            </View>
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
