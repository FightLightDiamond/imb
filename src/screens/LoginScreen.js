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
import firebase from 'react-native-firebase';
import {AccessToken, LoginManager, LoginButton} from 'react-native-fbsdk';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure({
    iosClientId: '447854677360-33mik4jiubhv7evj1on47g5fs4jgmgsu.apps.googleusercontent.com'
})

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            email: '',
            password: '',
            note: '',
        };
    }

    componentWillMount(): * {
        // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        //     this.setState({
        //         email: 'b@gmail.com',
        //     });
        // });
        //
        // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        //     this.setState({
        //         email: 'a@gmail.com',
        //     });
        // });
    }

    componentWillUnmount(): * {
        if (this.unsubscriber) {
            this.unsubscriber();
        }
    }

    componentDidMount(): * {
        const {navigation} = this.props;
        navigation.setOptions({title: 'Login'});

        this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => {
            this.setState({
                user: changedUser,
            });
        });


    }

    onGuest = () => {
        firebase.auth().signInAnonymously()
            .then((res) => {
                this.setState({
                    isAuthenticated: true,
                });
                alert(this.state.isAuthenticated);
            }).catch((error) => {
            alert(error);
        });
    };

    onLogin = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log(user);
                alert('Login successfully');
            })
            .catch((e) => {
                console.log(e);
                alert(e);
            });
    };

    onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                alert('Register successfully');
                console.log(user);
            }).catch((error) => {
            console.log(error);
            alert(error);
        });
    };

    onLoginWithFacebook = () => {
        LoginManager.logInWithPermissions(['public_profile']).then(
            result => {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                    alert('Login facebook fail');
                    return;
                }
                console.log(
                    'Login success with permissions: ' +
                    result.grantedPermissions.toString(),
                );

                return AccessToken.getCurrentAccessToken();
            },
            error => {
                console.log('Login fail with error: ' + error);
            },
        ).then(data => {
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
            return firebase.auth().signInWithCredential(credential);
        }).then(currentUser => {
            alert('Login Facebook successfully');
        }).catch(error => {
            alert('Login fail');
        });
    };

    onLoginWithGoogle = () => {
        GoogleSignin.signIn()
            .then(data => {
                console.log(data);
                alert('Login google successfully');
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                console.log('credential', credential)
                return firebase.auth().signInWithCredential(credential);
            })
            .then(currentUser => {
                console.log(currentUser);
                alert('Login google firebase successfully');
            })
            .catch(e => {
                console.log(e);
                alert('Login Google fail');
            });
    };

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

                <Button onPress={this.onGuest} title={'Guest'}/>
                <Button onPress={this.onLogin} title={'Login'}/>
                <Button onPress={this.onLoginWithFacebook} title={'Login with Facebook'}/>
                <Button onPress={this.onLoginWithGoogle} title={'Login with Google'}/>
                <Button onPress={this.onRegister} title={'Register'}/>
                <Text>{this.state.isAuthenticated ? 'Logged in anonymous' : 'no authen'}</Text>
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
