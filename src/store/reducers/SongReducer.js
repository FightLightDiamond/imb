const audioState = {
    audio: {},
};

const audioReducer = (state = audioState, action) => {
    switch (action.type) {
        case 'PLAY':
            return {...state, section: action.payload, audios: action.payload.crazies};
        case 'PAUSE':
            return {...state, number: state.number - 1};
        case 'INCREMENT_VOL':
            return {...state, number: state.number - 1};
        case 'DECREMENT_VOL':
            return {...state, number: state.number - 1};
        case 'MUTE':
            return {...state, number: state.number - 1};
        case 'UNMUTE':
            return {...state, number: state.number - 1};
        case 'INCREMENT_DURATION':
            return {...state, number: state.number - 1};
        case 'DECREMENT_DURATION':
            return {...state, number: state.number - 1};
    }

    return state;
};

export default audioReducer;
