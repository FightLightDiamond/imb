import {ADD_TASK} from './action-types/TaskActionType';

const addTask = (name) => {
    return {
        type: ADD_TASK,
        name: name,
    };
}

export default addTask;
