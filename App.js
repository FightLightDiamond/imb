import React from 'react';
import {AppNavigator} from './src/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import {DrawerNav} from './src/navigators/DrawerNav';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PaperProvider>
                {/*<DrawerNav/>*/}
                <AppNavigator/>
            </PaperProvider>
        );
    }
}


