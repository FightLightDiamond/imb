/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Keyboard,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';
import {Provider} from 'react-redux';
import store from '../store/store';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            note: '',
        };
    }

    componentWillMount(): * {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState({
                email: 'b@gmail.com',
            });
        });

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState({
                email: 'a@gmail.com',
            });
        });
    }

    componentWillUnmount(): * {

    }

    componentDidMount(): * {
        const {navigation} = this.props;
        navigation.setOptions({title: 'Login'});
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <Provider store={store}>
                <View>
                    <Text>Login</Text>
                    <Text>{this.state.email}</Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}
                               value={this.state.email}
                               keyboardType={'email-address'}
                               placeholder={'Enter your email'}
                               placeholderTextColor={'red'}
                               onChangeText={
                                   (text) => {
                                       this.setState({
                                           email: text,
                                       });
                                   }
                               }
                    />
                </View>
                <View>
                    <TextInput style={styles.textInput}
                               keyboardType={'default'}
                               placeholder={'Enter your password'}
                               placeholderTextColor={'red'}
                               secureTextEntry={true}
                               onChangeText={
                                   (text) => {
                                       this.setState({
                                           password: text,
                                       });
                                   }
                               }
                    />
                </View>
                <View>
                    <TextInput style={styles.area}
                               keyboardType={'default'}
                               placeholder={'Enter your password'}
                               placeholderTextColor={'red'}
                               secureTextEntry={true}
                               multiline={true}
                               editable={true}
                               autoFocus={true}
                               returnKeyType={'done'}
                               onSubmitEditing={Keyboard.dismiss}
                               onChangeText={
                                   (text) => {
                                       this.setState({
                                           note: text,
                                       });
                                   }
                               }
                    />
                </View>
                <View style={
                    {
                        flex: 1,
                        alignItems: 'center',
                    }
                }>
                    <View style={
                        {
                            backgroundColor: 'green',
                            padding: 3,
                            borderRadius: 16,
                            shadowRadius: 20,
                            shadowOpacity: 0.5,
                        }
                    }>
                        <Button
                            color={'white'}
                            title={'Login'}
                        />
                    </View>
                </View>

            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 30,
        margin: 20,
        borderColor: 'gray',
        borderWidth: 1,
    },
    area: {
        height: 100,
        margin: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderBottomColor: 'green',
        borderBottomWidth: 3,
    },
    container: {
        flex: 1,
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
    },
});
