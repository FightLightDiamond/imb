import {GET_AUDIO, PLAY_AUDIO, PAUSE_AUDIO} from '../actions/action-types/AudioActionType';

// Action
const getAudio = (source) => {
    return {
        type: GET_AUDIO,
        payload: source,
    };
};

const playAudio = () => {
    return {
        type: PLAY_AUDIO,
        payload: null,
    };
};

const pauseAudio = () => {
    return {
        type: PAUSE_AUDIO,
        payload: null,
    };
};

export {getAudio, playAudio, pauseAudio};
