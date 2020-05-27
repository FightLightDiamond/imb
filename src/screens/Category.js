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
import ProductListItem from '../components/ProductionListItem';
import FactoryService from '../services/FactoryService';

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount(): * {
        const {navigation} = this.props;
        const {route} = this.props;
        const {params} = route;
        navigation.setOptions({title: params.name});

        const request = FactoryService.request('ProductService', 'test')
        request.setDomain('http://localhost:3000')
        request.index({category_id: params.id}).then( (res) => {
            this.setState({
                products: res.data
            })
        }).catch((e) => {

        })
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        if(this.state.products.length > 0)   return (
            <FlatList
                numColumns={2}
                contentContainerStyle={styles.container}
                data={this.state.products}
                renderItem={({item}) =>
                    <View style={styles.wrapper}>
                        <ProductListItem product={item}/>
                    </View>
                }
                keyExtractor={(item) => `${item.id}`}
            />
        );

        return (
            <View>
                <Text>No product</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'stretch',
        // backgroundColor: '#fff',
        // justifyContent: 'center',
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
    },
});
