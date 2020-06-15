import React from 'react';
import {
    // StyleSheet,
    View,
} from 'react-native';
import {Provider} from 'react-redux';
// import AddView from '../containers/Task/AddViewContainer'
// import CounterContainer from '../containers/Task/CounterContainer';
// import TaskFlatList from '../containers/Task/TaskFlatListContainer'
import CartContainer from '../containers/CartContainer'
import store from '../store/store';

export default class CartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(): * {
        const {navigation} = this.props;
        navigation.setOptions({title: 'Cart'});
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <Provider store={store}>
                <View >
                    <CartContainer/>
                    {/*<AddView/>*/}
                    {/*<CounterContainer/>*/}
                    {/*<TaskFlatList/>*/}
                </View>
            </Provider>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 16,
//         paddingLeft: 8,
//         paddingRight: 8,
//     },
//     wrapper: {
//         flex: 1,
//         paddingHorizontal: 8,
//     },
// });
