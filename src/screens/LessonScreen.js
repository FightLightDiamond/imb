import React from 'react';
import LessonContainer from '../containers/English/LessonContainer';
import {Provider} from 'react-redux';
import store from '../store/store';
import FactoryService from '../services/FactoryService';

export default class LessonScreen extends React.Component {
    componentDidMount(): * {
        const {navigation} = this.props;
        const {route} = this.props;
        const {params} = route;

        navigation.setOptions({title: params.name});
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <Provider store={store}>
                <LessonContainer />
            </Provider>
        );
    }
}
