import React from 'react';
import {
    Alert,
    StyleSheet,
    View,
} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import Swipeout from 'react-native-swipeout';


export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
    }

    // refreshFlatList = () => {
    //
    // }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {item, onAddToCart} = this.props;

        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey !== null) {
                    this.setState({activeRowKey: null})
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.id})
            },
            right: [
                {
                    onPress: () => {
                        Alert.alert('Alert', 'Are you sure want to delete?', [
                            {
                                text: 'No', onPress: () => {

                                }
                            },
                            {
                                text: 'Yes', onPress: () => onAddToCart(item.id)
                            }
                        ])
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        Alert.alert('Alert', 'Are you sure want to delete?', [
                            {
                                text: 'No', onPress: () => {

                                }
                            },
                            {
                                text: 'Yes', onPress: () => onAddToCart(item.id)
                            }
                        ])
                    },
                    text: 'Delete', type: 'delete'
                }
            ]
        }

        return (
            <View style={styles.wrapper}>
                <Swipeout {...swipeSetting}>
                    <View key={item.id}>
                        <Card>
                            <Card.Cover source={{uri: item.img}}/>
                            <Card.Content>
                                <Title>{item.title}</Title>
                                <Paragraph>{item.price}</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => onAddToCart(item.id)}>Add Cart</Button>
                            </Card.Actions>
                        </Card>
                    </View>
                </Swipeout>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 8,
    },
});
