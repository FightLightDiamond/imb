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
    View,
} from 'react-native';

import CategoryListItem from '../components/CategoryListItem';
import FactoryService from '../services/FactoryService'

export default class Categories extends React.Component {
     constructor(props) {
        super(props);
         this.state = {
             categories: [],
         };
    }

    componentDidMount(): * {
        const request = FactoryService.request('CategoryService', 'test')
        request.setDomain('http://localhost:3000')
        request.index().then( (res) => {
            this.setState({
                categories: res.data
            })
        })
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {categories} = this.state;
        const {navigation} = this.props;
        navigation.setOptions({ title: 'Home' });

        if(this.state.categories.length > 0)
            return (
            <View style={styles.container}>
                <FlatList data={categories}
                          renderItem={({item}) =>
                              <CategoryListItem
                                  category={item}
                                  onPress={() => navigation.navigate('Category', item)}
                              />}
                          keyExtractor={(item) => `${item.id}`}
                          contentContainerStyle={{backgroundColor: 'silver'}}
                />
            </View>
        );

        return (<View>
            <Text>No category</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: 0
    },
});