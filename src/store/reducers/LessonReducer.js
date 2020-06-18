import {GET_SECTION, GET_SECTIONS} from '../actions/action-types/LesonActionType';

const lessonState = {
    sections: [],
    section: [],
    lessons: [],
    lesson: {},
};

const lessonReducer =  (state = lessonState, action) => {
    switch (action.type) {
        case GET_SECTION:
            return {...state, section: action.payload, lessons: action.payload.crazies};
        case GET_SECTIONS:
            return {...state, number: state.number - 1};
    }

    return state;
};

export default lessonReducer;
