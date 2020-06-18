import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default class AddView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {onAddNewTask} = this.props

        return (
            <View style={styles.addView}>
                <Text style={{fontSize: 18, marginBottom: 10}}>To Do App</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput
                            returnKeyType={"done"}
                            // underlineColorAndroid={"transparent"}
                            value={this.state.name}
                            onSubmitEditing={() => onAddNewTask(this.state.name)}
                            onChangeText={text => this.setState({name: text})}
                            placeholder={"Task name"}
                            style={[
                                {flex: 1},
                                styles.input
                            ]}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => onAddNewTask(this.state.name)}>
                            <Text style={{color: 'blue'}}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: 0
    },
    addView: {
        ...Platform.select({
            ios: {
                height: 94,
                paddingTop: 20
            },
            android: {
                height: 74
            }
        }),
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowColor: 'gray',
        elevation: 2
    },
    input : {
        height: 30,
        padding: 5,
        borderWidth: 1,
        fontSize: 15
    },
    button: {
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#2196F3',
        padding: 7
    }
});
