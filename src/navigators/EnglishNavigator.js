import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EnglishScreen from '../screens/EnglishScreen';
import LessonScreen from '../screens/LessonScreen';

const EnglishStack = new createStackNavigator();

const EnglishStackScreen = () => {
    const navigator = <EnglishStack.Navigator>
        <EnglishStack.Screen
            name={'English'}
            component={EnglishScreen}
            option={{title: 'English'}}
        />
        <EnglishStack.Screen
            name={'Lesson'}
            component={LessonScreen}
            option={{title: 'Lesson'}}
        />
    </EnglishStack.Navigator>

    return (navigator);
};

// const LessonStack = new createStackNavigator();
// const LessonScreen = () => {
//     const stack = <LessonStack.Navigator>
//         <LessonStack.Screen
//             name={'Lesson'}
//             component={LessonScreen}
//             option={{title: 'Lesson'}}
//         />
//     </LessonStack.Navigator>
//
//     return (stack)
// }

export {EnglishStackScreen};
