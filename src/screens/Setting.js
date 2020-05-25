/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import FactoryService from '../services/FactoryService';

export default class Setting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount(): * {
        const {navigation} = this.props;
        const {route} = this.props;
        const {params} = route;
        navigation.setOptions({title: 'Settings'});

        const request = FactoryService.request('GHNService', 'test')

        const hubs = request.GetHubs()
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <View>
                <Text>Setting</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
