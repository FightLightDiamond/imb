import React from 'react';
import {Alert, Text, View} from 'react-native';
import Swipeout from 'react-native-swipeout';


export default class FlatListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            releaseYear: '0',
        };
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const swipeSettings = {
            autoClose: true,
            right: [
                {
                    onPress: () => {
                        const {movieComponent} = this.props;

                        movieComponent.refs
                            .editModal
                            .showEditModal({...this.props});
                    },
                    text: 'Edit', type: 'primary',
                },
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to del?', [
                                {
                                    text: 'No', onPress: () => {

                                    },
                                    style: 'cancel',
                                },
                                {
                                    text: 'Yes', onPress: () => {
                                        const {movieComponent, onDel, id} = this.props
                                        onDel(id)
                                    },
                                },
                            ],
                            {cancelable: true},
                        );
                    },
                    text: 'Del', type: 'delete',
                },
            ],
        };

        const {name, id, releaseYear} = this.props;

        return (
            <Swipeout {...swipeSettings}>
                <View style={{flex: 1}}>
                    <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: 'white',
                        backgroundColor: (id % 2 === 0 ? 'dodgerblue' : 'mediumseagreen'),
                    }}>
                        {`${name}, release year=${releaseYear}`}
                    </Text>
                </View>
            </Swipeout>
        );
    }
}
