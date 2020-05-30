import React from 'react';
import {AppNavigator} from './src/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PaperProvider>
                <AppNavigator/>
            </PaperProvider>
        );
    }
}


