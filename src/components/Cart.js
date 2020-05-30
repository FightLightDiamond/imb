import React from 'react';
import {
    FlatList,
    StyleSheet,
    TouchableOpacity, View, ScrollView
} from 'react-native';
import {Card, Button, Title, Paragraph, List, Subheading, IconButton} from 'react-native-paper';
import {Col, Row, Grid} from 'react-native-easy-grid';


export default class Cart extends React.Component {

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

    cart(datum) {
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
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => onAddQuantity(datum.id)}>
                        <IconButton icon="arrow-up" color={"grey"}/>
                    </TouchableOpacity>
                    <Subheading>{datum.quantity}</Subheading>
                    <TouchableOpacity onPress={() => onSubtractQuantity(datum.id)}>
                        <IconButton icon="arrow-down" color={"grey"}/>
                    </TouchableOpacity>
                </Col>
            </Row>
        );
    }



    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {cart} = this.props;

        const getItem = (data, index) => {
           return data[index]
        }

        const getItemCount = (data) => {
            return data.length;
        }

        let productTable = (<FlatList
            // initialNumToRender={2}
            numColumns={2}
            contentContainerStyle={styles.container}
            data={cart.items}
            // getItemCount={getItemCount}
            // getItem={getItem}
            renderItem={
                ({item}) => this.products(item)
            }
            keyExtractor={(item) => `${item.id}`}
        />);

        let cartTable = <FlatList
            initialNumToRender={4}
            contentContainerStyle={styles.container}
            data={cart.addedItems}
            renderItem={
                ({item}) => this.cart(item)
            }
            // getItemCount={getItemCount}
            // getItem={getItem}
            keyExtractor={(item) => `${item.id}`}
        />;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.cart}>
                        <Grid>
                            {cartTable}
                        </Grid>
                    </View>

                    {/*<SafeAreaView>*/}
                        {productTable}
                    {/*</SafeAreaView>*/}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cart: {
        paddingHorizontal: 8,
    },
    container: {
        paddingTop: 16,
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'scroll',
    },
    head: {height: 40, backgroundColor: '#f1f8ff'},
    text: {margin: 6},
    wrapper: {
        flex: 1,
        padding: 8,
    },
});
