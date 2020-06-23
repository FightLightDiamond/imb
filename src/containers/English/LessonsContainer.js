import React from 'react';
import {
    FlatList,
    // TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getSection} from '../../store/actions/LessonAction';
import FactoryService from '../../services/FactoryService';
import {
    // Col,
    Grid,
} from 'react-native-easy-grid';
import LessonList from '../../components/English/LessonList';

// const Sound = require('react-native-sound');
// Sound.setCategory('Playback');

class LessonsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
        };
    }

    async componentDidMount(): * {
        const {onGetSection} = this.props;

        const {lessons} = this.props.lesson;

        if(lessons.length === 0) {
            const request = FactoryService.request('CourseService');
            const res = await request.show(1);

            onGetSection(res);
        }

    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {lessons, lesson} = this.props.lesson;
        const {navigation} = this.props;

        return (
            <FlatList
                data={lessons}
                renderItem={({item}) =>
                    <Grid
                        onPress={() => navigation.navigate('Lesson', item)}
                        style={{padding: 5, backgroundColor: lesson.id===item.id ? 'silver': 'white'}}>
                        {/*<TouchableOpacity*/}
                        {/*    */}
                        {/*>*/}
                        <LessonList
                            lessonSelected={lesson}
                            lesson={item}
                        />
                        {/*</TouchableOpacity>*/}
                    </Grid>
                }
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={{backgroundColor: 'silver'}}
            />
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
