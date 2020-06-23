import React from 'react';
import LessonContainer from '../containers/English/LessonContainer';
import {Provider} from 'react-redux';
import store from '../store/store';

export default class LessonScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {navigation} = this.props;
        const {route} = this.props;
        const {params} = route;

        navigation.setOptions({title: params.name});

        return (
            <Provider store={store}>
                <LessonContainer id={params.id} />
            </Provider>
        );
    }
}
