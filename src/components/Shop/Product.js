import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';


export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {item, onAddToCart} = this.props;

        return (
            <View style={styles.wrapper}>
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
