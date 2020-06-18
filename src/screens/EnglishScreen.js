import React from 'react';
import LessonsContainer from '../containers/English/LessonsContainer';
import {Provider} from 'react-redux';
import store from '../store/store';

export default class EnglishScreen extends React.Component {
    componentDidMount(): * {
        const {navigation} = this.props;
        const {route} = this.props;
        const {params} = route;
        navigation.setOptions({title: 'ABC'});
    }
    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {navigation} = this.props;
        const view = <Provider store={store}>
            <LessonsContainer navigation={navigation} />
        </Provider>

        return (view);
    }
}
