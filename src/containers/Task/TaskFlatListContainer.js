/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {connect} from 'react-redux';
import TaskFlatList from '../../components/Task/TaskFlatList';
import {
    View,
} from 'react-native';
import {finishTask, deleteTask} from '../../store/actions/TaskListAction'

class TaskFlatListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {data} = this.props.listData;
        const {onFinishedItem, onDeleteItem} = this.props;

        return (
            <View>
                <TaskFlatList
                    data={data}
                    onDeleteItem={onDeleteItem}
                    onFinishedItem={onFinishedItem}
                />
            </View>

        );
    }
}

export default connect(
    state => {
        return {
            listData: state.taskList,
        };
    },
    dispatch => {
        return {
            onFinishedItem: (index) => dispatch(finishTask(index)),
            onDeleteItem: (index) => dispatch(deleteTask(index))
        }
    }
)(TaskFlatListContainer);
