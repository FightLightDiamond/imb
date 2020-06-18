import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class OrdersScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount(): * {
        const {navigation} = this.props;
        const {route} = this.props;
        const {params} = route;
        navigation.setOptions({title: 'Orders'});
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <View>
                <Text>Order</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
