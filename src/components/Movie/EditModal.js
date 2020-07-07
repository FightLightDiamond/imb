import React from 'react';
import ModalBox from 'react-native-modalbox';
import Button from 'react-native-button';
import {View, Dimensions, TextInput, Text} from 'react-native';

const screen = Dimensions.get('window');

export default class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id,
            name: '',
            releaseYear: '',
        };
    }

    showEditModal = item => {
        console.log('showEditModal', item)

        this.setState({
            id: item.id.toString(),
            name: item.name,
            releaseYear: item.releaseYear
        })

        this.refs.myModal.open()
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {name, releaseYear} = this.state;
        const {onUpdate} = this.props;

        return (
            <ModalBox ref={'myModal'}
                      onClosed={() => {

                      }}
                      backdrop={true}
                      position={'center'}
            >
                <Text>Movie's information</Text>

                <TextInput
                    placeholder={'Name'}
                    value={name}
                    onChangeText={text => this.setState({name: text})}/>

                <TextInput
                    placeholder={'releaseYear'}
                    value={releaseYear + ''}
                    onChangeText={text => this.setState({releaseYear: text})}/>

                <Button onPress={() => {
                    if (name.length === 0 || releaseYear.length === 0) {
                        alert('You must enter name and release Year');
                        return;
                    }

                    onUpdate(this.state)

                    this.refs.myModal.close();
                }}>Save</Button>
            </ModalBox>
        );
    }
}
