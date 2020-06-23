import React from 'react';
import {
    Dimensions,
    ScrollView,
    Text,
} from 'react-native';
import {connect} from 'react-redux';
import {getLesson} from '../../store/actions/LessonAction';
import FactoryService from '../../services/FactoryService';
import {TabView, SceneMap} from 'react-native-tab-view';
import Meaning from '../../components/English/Lesson/Meaning';
import Sentence from '../../components/English/Lesson/Sentence';
import Time from '../../components/English/Audio/Time';
import {getAudio, pauseAudio, playAudio} from '../../store/actions/AudioAction';

const initialLayout = {width: Dimensions.get('window').width};

class LessonsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: null,
            details: [],
            index: 0,
            audio: 0,
        };
    }

    async componentDidMount(): * {
        const {onGetLesson, onLoadAudio} = this.props;

        const request = FactoryService.request('CrazyService');
        const {id} = this.props;

        const res = await request.show(id);

        if (200 > res.status || res.status > 300) {
            alert(res.data);
        } else {
            onGetLesson(res.data);
            onLoadAudio(res.data.audio);
        }
    }

    renderScene = (details) => {
        return SceneMap({
            first: () => <Sentence details={details}/>,
            second: () => <Meaning details={details}/>,
        });
    };

    setIndex = (i) => {
        return this.setState({index: i});
    };

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {
            details,
        } = this.props.lesson;

        const {
            audio,
        } = this.props.audio;

        const {
            onPauseAudio,
            onPlayAudio
        } = this.props;

        return (
            <ScrollView>
                <Time audio={audio}/>
                <Text onPress={() => onPauseAudio()}>Pause</Text>
                <Text onPress={() => onPlayAudio()}>Play</Text>
                <TabView
                    navigationState={{
                        index: this.state.index,
                        routes: [
                            {key: 'first', title: 'first'},
                            {key: 'second', title: 'second'},
                        ],
                    }}
                    renderScene={this.renderScene(details)}
                    onIndexChange={this.setIndex}
                    initialLayout={initialLayout}
                />
            </ScrollView>
        );
    }
}

export default connect(
    state => {
        return {
            lesson: state.lesson,
            audio: state.audio,
        };
    },
    dispatch => {
        return {
            onGetLesson: data => dispatch(getLesson(data)),
            onLoadAudio: data => dispatch(getAudio(data)),
            onPlayAudio: data => dispatch(playAudio()),
            onPauseAudio: data => dispatch(pauseAudio()),
        };
    },
)(LessonsContainer);
