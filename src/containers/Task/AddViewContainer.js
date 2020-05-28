/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {connect} from 'react-redux'
import AddView from '../../components/Task/AddView';
import addTask from '../../store/actions/AddViewAction'

class AddViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {onAddNewTask} = this.props
        return (
            <AddView onAddNewTask={onAddNewTask}/>
        )
    }
}

export default connect(
    state => {
        return {

        };
    },
    dispatch => {
        return {
            onAddNewTask: (index) => dispatch(addTask(index))
        }
    }
)(AddViewContainer)
