import React from 'react';
import {
    FlatList,
    TouchableHighlight,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import {List} from 'react-native-paper';
import firebase from 'react-native-firebase';


export default class TodoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTaskName: null,
            todoTasks: [],
        };

        this.ref = firebase.firestore().collection('todo_tanks');
    }

    async componentDidMount(): * {
        this.unsubcribe = this.ref.onSnapshot(querySnapshot => {
            // console.log('querySnapshot', querySnapshot)
            const todos = []

            querySnapshot.forEach(doc => {
                console.log(doc.data())
                todos.push({
                    taskName: doc.data().taskName
                })
            })

            this.setState({
                todoTasks: todos.sort((a,b) => {
                    return (a.taskName > b.taskName)
                }),
                loading: false
            })
        })
    }

    onPressAdd = () => {
        this.ref.add({
            taskName: this.state.newTaskName,
        }).then(data => {
            alert('Add successfully')
            console.log(data);
            this.setState({
                newTaskName: '',
                loading: true,
            });
        }).catch(e => {
            alert('Add fail')
            console.log(e);
            this.setState({
                newTaskName: '',
                loading: true,
            });
        });
    };

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <View>
                <TextInput style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    padding: 10,
                    borderColor: 'blue',
                    borderWidth: 1,
                    color: 'blue',
                }}
                           value={this.state.newTaskName}
                           keyboardType={'default'}
                           placeholderTextColor={'blue'}
                           placeholder={'Enter task name'}
                           autoCapitalize={'none'}
                           onChangeText={text => {
                               this.setState({
                                   newTaskName: text,
                               });
                           }}
                />

                <TouchableHighlight
                    style={{marginRight: 10}}
                    underlayOrder={'tomato'}

                >
                    <Button onPress={this.onPressAdd} title={'Add'}/>
                </TouchableHighlight>


                <FlatList
                    data={this.state.todoTasks}
                    renderItem={({item, index}) => {
                        return (<Text>{item.taskName}</Text>)
                    }}
                    keyExtractor={(item, index) => index}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});
