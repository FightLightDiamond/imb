import {ADD_TASK, DELETE_TASK, FINISH_TASK} from '../actions/action-types/TaskActionType';

let appState = {
    data: [
        {title: 'Go to the office', isFinish: true},
        {title: 'Prepare', isFinish: false},
        {title: 'Team meeting', isFinish: false},
        {title: 'Commit tasks changed', isFinish: true},
    ],
};

const taskListReducer = (state = appState, action) => {
    let newTaskList = state.data;

    switch (action.type) {
        case ADD_TASK:
            const newTask = {title: action.name, isFinish: false};
            return {...state, data: [...state.data, newTask]};
        case FINISH_TASK:
            newTaskList[action.payload].isFinish = true;
            return {...state, data: newTaskList};
        case DELETE_TASK:
            newTaskList = newTaskList.filter((item, i) => i !== action.payload);
            return {...state, data: newTaskList};
    }

    return state;
};

export default taskListReducer;
