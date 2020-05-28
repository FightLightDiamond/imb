/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class TaskFlatList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem = ({item, index}) => {
        const {onFinishedItem, onDeleteItem} = this.props;

        return (
            <View style={styles.itemContainer}>
                <View style={{flex: 1}}>
                    <Text style={{color: 'black'}}>{item.title}</Text>
                </View>

                <View>
                    <TouchableOpacity style={{marginTop: -2}}
                                      onPress={() => onFinishedItem(index)}>
                        <Text>{(item.isFinish) ? '(Finish)' : '(Processing)'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: 'center'}}>
                    <TouchableOpacity style={{marginTop: -2}}
                                      onPress={() => onDeleteItem(index)}>
                        <Text>{(item.isFinish) ? ' (Delete)' : ''}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {data} = this.props;

        return (
            <View>
                <Text>Cart</Text>
                <View>
                    <FlatList
                        data={data}
                        keyExtrator={(item, index) => index}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: 0,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        borderColor: 'silver',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowColor: 'gray',
        elevation: 2,
    },
});
