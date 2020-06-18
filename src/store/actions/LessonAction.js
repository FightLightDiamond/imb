import {GET_LESSON, GET_SECTION, GET_LESSONS, GET_SECTIONS} from './action-types/LesonActionType';

// Action
const getLesson = (index) => {
    return {
        type: GET_LESSON,
        payload: index,
    };
};

const getLessons = (index) => {
    return {
        type: GET_LESSONS,
        payload: index,
    };
};
const getSection = (id) => {
    return {
        type: GET_SECTION,
        payload: id,
    };
};

const getSections = (index) => {
    return {
        type: GET_SECTIONS,
        payload: index,
    };
};

export {getLesson, getLessons, getSection, getSections}
