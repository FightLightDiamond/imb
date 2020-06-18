import React from 'react';
import {
    // StyleSheet,
    Text,
    View
} from 'react-native';
import Modal from 'react-native-modalbox';
// import Button from 'react-native-button';
import {TextInput, Button} from 'react-native-paper';

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }

    showAddProduct = () => {
        this.refs.myModal.open()
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // const {cart, onAddToCart} = this.props;

        return (
            <Modal ref={'myModal'} style={{
                justifyContent: 'flex-start',
                borderRadius: Platform.OS === 'ios' ? 30: 0,
                shadowRadius: 10,
                // width: screen.width - 80,
                height: 280
            }}
            position={'center'}
                   backdrop={true}
                   onClosed={() => {
                       alert('Model close')
                   }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New Production</Text>
                <TextInput
                    label='Name'
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                    focus={true}
                    placeholder={'Enter name'}
                />
                <TextInput
                    label='Description'
                    value={this.state.description}
                    onChangeText={text => this.setState({ description: text })}
                    placeholder={'Enter name'}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10
                }}>
                    <Button
                        style={{
                            align: 'center',
                            width: 150
                        }}
                        contentStyle={{width: 150}}
                        compact={false}
                        icon="plus"
                        mode="contained" onPress={() => {
                            if(this.state.name.length === 0 || this.state.description.length === 0) {
                                alert('Please enter information')
                                return 0;
                            }
                    }}>
                        Press me
                    </Button>
                </View>
            </Modal>
        );
    }
}

// const styles = StyleSheet.create({
//
// });
