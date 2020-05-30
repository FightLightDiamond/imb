import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class ProductListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (id) => {
        this.props.addToCart(id)
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {product, onAddToCartClick} = this.props;

        return (
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{url: product.image[0].url}}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{product.name}</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{product.price}</Text>
                        </View>
                        <TouchableOpacity onPress={onAddToCartClick}>
                            <Text onClick={() => {
                                this.handleClick(product.id);
                            }} style={styles.cartText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc',
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        // shadowRadius: {width: 0, height: 0},
    },
    container: {
        paddingTop: 16,
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        alignItems: 'center',
    },
    info: {
        padding: 8,
    },
    img: {
        // flex: 1,
        alignSelf: 'center',
        width: win.width / 2.7,
        height: win.height / 5.2,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    name: {
        fontSize: 16,
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1,
    },
});
