import React from 'react';
import {Text, View, Button} from 'react-native';


export default class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {onIncrement, onDecrement, step} = this.props

        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Button onPress={() => onIncrement(1)} title={'Tăng'} />
                    <Button onPress={() => onDecrement(1)} title={'Giảm'} />
                </View>

                <Text>Counts: {step}</Text>
            </View>
        );
    }
}
