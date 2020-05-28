import React from 'react';
import {
    Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import { Button, DataTable } from 'react-native-paper';

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '456\n789'],
                ['a', 'b', 'c', 'd']
            ]
        }
    }

    products(datum, key) {
        const {onAddToCart} = this.props;
        return (
            <View key={key}>
                {/*<Text>{datum.id}</Text>*/}
                <Text>{datum.title}</Text>
                <TouchableOpacity onPress={() => onAddToCart(datum.id)}>
                    <Text style={{color: 'blue'}}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }

    cart(datum, key) {
        const {onRemoveItem, onAddQuantity, onSubtractQuantity} = this.props;
        return (
            <View key={key}>
                {/*<Text>{datum.id}</Text>*/}
                <Text>{datum.title}</Text>
                <TouchableOpacity onPress={() => onRemoveItem(datum.id)}>
                    <Text style={{color: 'blue'}}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onAddQuantity(datum.id)}>
                    <Text style={{color: 'blue'}}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSubtractQuantity(datum.id)}>
                    <Text style={{color: 'blue'}}>Sub</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {cart} = this.props;

        let productTable = cart.items.map((datum, key) => {
            return this.products(datum, key);
        });

        let cartTable = cart.addedItems.map((datum, key) => {
            return this.cart(datum, key);
        });
        const state = this.state;
        return (
            <View>
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Dessert</DataTable.Title>
                        <DataTable.Title numeric>Calories</DataTable.Title>
                        <DataTable.Title numeric>Fat</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                        <DataTable.Cell numeric>159</DataTable.Cell>
                        <DataTable.Cell numeric>6.0</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                        <DataTable.Cell numeric>237</DataTable.Cell>
                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Pagination
                        page={1}
                        numberOfPages={3}
                        onPageChange={(page) => { console.log(page); }}
                        label="1-2 of 6"
                    />
                </DataTable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});
