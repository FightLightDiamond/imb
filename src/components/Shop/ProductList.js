import React from 'react';
import {
    FlatList,
    StyleSheet,
    TouchableOpacity, View,
} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';


export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
    }

    products(datum) {
        const {onAddToCart} = this.props;

        return (
            <View style={styles.wrapper}>
                <View key={datum.id}>
                    <Card>
                        <Card.Cover source={{uri: datum.img}}/>
                        <Card.Content>
                            <Title>{datum.title}</Title>
                            <Paragraph>{datum.price}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => onAddToCart(datum.id)}>Add Cart</Button>
                        </Card.Actions>
                    </Card>
                </View>
            </View>

        );
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {items} = this.props;

        let productTable = (<FlatList
            numColumns={2}
            contentContainerStyle={styles.container}
            data={items}
            renderItem={
                ({item}) => this.products(item)
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
