import firebase from 'react-native-firebase';

const iosConfig = {
    clientId: '',
    appId: '',
    apiKey: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    projectId: '',
    persistence: '',
};

const androidConfig = {
    clientId: '',
    appId: '',
    apiKey: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    projectId: '',
    persistence: '',
};

const animalApp = firebase.initializeApp(
    Platform.OS === 'ios' ? iosConfig : androidConfig, 'animalApp',
);
