/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import { connect } from 'react-redux'

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount(): * {
        const {navigation} = this.props;
        const {route} = this.props;
        const {params} = route;
        navigation.setOptions({title: 'Cart'});
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <View>
                <Text>Cart</Text>
                <View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
    },
});
