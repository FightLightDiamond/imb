import React from 'react';
import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native';
import Product from './Product'

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {items, onAddToCart} = this.props;

        let productTable = (<FlatList
            // horizontal={true}
            numColumns={2}
            contentContainerStyle={styles.container}
            data={items}
            renderItem={
                ({item}) => <Product item={item} onAddToCart={onAddToCart}/>
            }
            keyExtractor={(item) => `${item.id}`}
        />);

        return (
            <View style={styles.container}>
                {productTable}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'scroll',
    },
});
