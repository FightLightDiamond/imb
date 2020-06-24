import {GET_AUDIO, PLAY_AUDIO, PAUSE_AUDIO} from '../actions/action-types/AudioActionType';

const Sound = require('react-native-sound');

const audioState = {
    audio: new Sound(),
    time: 0
};

const audioReducer = (state = audioState, action) => {
    switch (action.type) {
        case GET_AUDIO:
            state.audio.stop();
            console.log('action.payload', action.payload)
            return {...state, audio: new Sound(action.payload)};
        case PLAY_AUDIO:
            state.audio.play();

            return state;
        case PAUSE_AUDIO:
            state.audio.pause();

            return state;
    }

    return state;
};

export default audioReducer;
