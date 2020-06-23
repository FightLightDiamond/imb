import {GET_LESSON, GET_LESSONS, GET_SECTION, GET_SECTIONS} from '../actions/action-types/LesonActionType';

const lessonState = {
    sections: [],
    section: [],
    lessons: [],
    lesson: {},
    details: [],
};

const lessonReducer = (state = lessonState, action) => {
    switch (action.type) {
        case GET_LESSON:
            return {...state, lesson: action.payload, details: action.payload.details};
        case GET_LESSONS:
            return {...state, lessons: action.payload};
        case GET_SECTION:
            return {...state, section: action.payload, lessons: action.payload.crazies};
        case GET_SECTIONS:
            return {...state, number: state.number - 1};
    }

    return state;
};

export default lessonReducer;
