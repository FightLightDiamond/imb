import React from 'react';
import {
    Button,
    View,
} from 'react-native';
// import AoeRandom from '../components/Game/AoeRandom';
// import CounterContainer from '../containers/CounterContainer';
import {Provider} from 'react-redux';
import store from '../store/store';
import MovieContainer from '../containers/MovieContainer';
import DrawerButton from '../components/Header/DrawerButton'


export default class AoeRandomScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(): * {
        const {navigation} = this.props;

        navigation.setOptions({
            title: 'AOE',
            headerLeft: () => (
                <DrawerButton toggle={navigation.toggleDrawer}/>
            ),
        });
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {

        return (
            <Provider store={store}>
                <View>
                    {/*<AoeRandom/>*/}
                    {/*<CounterContainer/>*/}
                    <MovieContainer />
                </View>
            </Provider>

        );
    }
}
