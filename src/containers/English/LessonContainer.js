import React from 'react';
import {
    FlatList, Text, TouchableOpacity,
    View,
} from 'react-native';
import {connect} from 'react-redux';
import {getSection} from '../../store/actions/LessonAction';
import FactoryService from '../../services/FactoryService';
import {Col, Grid} from 'react-native-easy-grid';
import LessonList from '../../components/English/LessonList';
const Sound = require('react-native-sound');
Sound.setCategory('Playback');

class LessonsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
        };
    }

    async componentDidMount(): * {

    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {navigation} = this.props;
        console.log(navigation)
        return (
           <View>
               <Text>AFDfs</Text>
           </View>
        );
    }
}

export default connect(
    state => {
        return {
            lesson: state.lesson,
        };
    },
    dispatch => {
        return {
            onGetSection: (data) => dispatch(getSection(data)),
        };
    },
)(LessonsContainer);
