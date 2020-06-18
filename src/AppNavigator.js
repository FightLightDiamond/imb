import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {EnglishStackScreen} from './navigators/EnglishNavigator';
import {CartStackScreen, OrdersStackScreen, SettingStackScreen, CategoryStackScreen} from './navigators/CartNavigator'
export const AppNavigator = () => {
    const Tab = createBottomTabNavigator();

    const icons = {
        focused: {
            Home: 'home',
            Cart: 'shopping-cart',
            Orders: 'book',
            Setting: 'settings',
            English: 'settings',
        },
        normal: {
            Home: 'home',
            Cart: 'shopping-cart',
            Orders: 'book',
            Setting: 'settings',
            English: 'settings',
        },
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName = focused
                            ? icons['focused'][route.name]
                            : icons['normal'][route.name];
                        // You can return any component that you like here!
                        return <MaterialIcons name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'green',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="English" component={EnglishStackScreen}/>
                <Tab.Screen name="Home" component={CategoryStackScreen}/>
                <Tab.Screen name="Cart" component={CartStackScreen}/>
                <Tab.Screen name="Orders" component={OrdersStackScreen}/>
                <Tab.Screen name="Setting" component={SettingStackScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};
