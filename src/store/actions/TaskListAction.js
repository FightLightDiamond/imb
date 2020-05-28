import {FINISH_TASK, DELETE_TASK} from './action-types/TaskActionType';

// Action
const finishTask = (index) => {
    return {
        type: FINISH_TASK,
        payload: index,
    };
};

const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index,
    };
};

export {finishTask, deleteTask}
