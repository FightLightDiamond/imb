import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View, ScrollView,
} from 'react-native';

import {Card, Subheading, IconButton} from 'react-native-paper';
import {Col, Row, Grid} from 'react-native-easy-grid';
import ProductList from './Shop/ProductList';
import AddProduct from './Product/AddProduct';

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    cartView(datum) {
        const {onRemoveItem, onAddQuantity, onSubtractQuantity} = this.props;

        return (
            <Row style={{padding: 3}}>
                <Col size={3} style={{paddingHorizontal: 2}}>
                    <Card.Cover source={{uri: datum.img}}/>
                </Col>

                <Col size={5} style={{paddingHorizontal: 5, flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <View style={{paddingLeft: 15}}>
                        <Subheading>{datum.title}</Subheading>
                        <Subheading>{datum.price} Đ</Subheading>
                        <Subheading onPress={() => onRemoveItem(datum.id)} style={{color: 'red'}}>Xóa</Subheading>
                    </View>
                </Col>

                <Col size={1} style={{
                    paddingHorizontal: 2,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => onAddQuantity(datum.id)}>
                        <IconButton icon="arrow-up" color={'grey'}/>
                    </TouchableOpacity>
                    <Subheading>{datum.quantity}</Subheading>
                    <TouchableOpacity onPress={() => onSubtractQuantity(datum.id)}>
                        <IconButton icon="arrow-down" color={'grey'}/>
                    </TouchableOpacity>
                </Col>
            </Row>
        );
    }

    _onPressAdd = () => {
        this.refs.addProduct.showAddProduct();
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {cart, onAddToCart} = this.props;

        let cartTable = <FlatList
            initialNumToRender={4}
            contentContainerStyle={styles.container}
            data={cart.addedItems}
            renderItem={
                ({item}) => this.cartView(item)
            }
            keyExtractor={(item) => `${item.id}`}
        />;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{
                        backgroundColor: 'tomato',
                        height: 64,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <TouchableHighlight
                            style={{marginRight: 10}}
                            underlayColor={'tomato'}
                            onPress={this._onPressAdd}
                        >
                            <Image source={{
                                url: 'https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg',
                            }}
                                   style={{width: 35, height: 35}}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.cart}>
                        <Grid>
                            {cartTable}
                        </Grid>
                        <Grid>
                            <Text>Total: {cart.total}</Text>
                        </Grid>
                    </View>

                    <ProductList items={cart.items} onAddToCart={onAddToCart}/>

                </ScrollView>
                <AddProduct ref={'addProduct'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cart: {
        paddingHorizontal: 8,
    },
    container: {
        // marginTop: Platform.OS === 'ios'? 34: 0,
    },
    head: {height: 40, backgroundColor: '#f1f8ff'},
    text: {margin: 6},
    wrapper: {
        flex: 1,
        padding: 8,
    },
});
