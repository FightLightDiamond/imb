import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Cart from './screens/Cart';
import Categories from './screens/Categories';
import Category from './screens/Category';
import Orders from './screens/Orders';
import Setting from './screens/Setting';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const AppNavigator = () => {
    const CartStack = createStackNavigator();
//Must component
    const CartStackScreen = () => {
        return (
            <CartStack.Navigator>
                <CartStack.Screen
                    name="Cart"
                    component={Cart}
                    options={{title: 'Cart'}}
                />
            </CartStack.Navigator>
        );
    };

    const CategoryStack = createStackNavigator();

    const CategoryStackScreen = () => {
        return (<CategoryStack.Navigator>
            <CategoryStack.Screen
                name="Categories"
                component={Categories}
                options={{title: 'Categories XS'}}
            />
            <CategoryStack.Screen
                name="Category"
                component={Category}
            />
        </CategoryStack.Navigator>);
    };

    const OrderStack = createStackNavigator();

    const OrdersStackScreen = () => {
        return (
            <OrderStack.Navigator>
                <OrderStack.Screen
                    name="Orders"
                    component={Orders}
                    options={{title: 'Orders'}}
                />
            </OrderStack.Navigator>
        );
    };

    const SettingStack = createStackNavigator();

    const SettingStackScreen = () => {
        return (
            <SettingStack.Navigator>
                <SettingStack.Screen
                    name="Setting"
                    component={Setting}
                    options={{title: 'Settings'}}
                />
            </SettingStack.Navigator>
        );
    };

    const Tab = createBottomTabNavigator();

    const icons = {
        focused: {
            Home: 'home',
            Cart: 'shopping-cart',
            Orders: 'book',
            Setting: 'settings'
        },
        normal: {
            Home: 'home',
            Cart: 'shopping-cart',
            Orders: 'book',
            Setting: 'settings'
        }
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                // screenOptions={({route}) => ({
                //     tabBarIcon: ({focused, color, size}) => {
                //         // console.log(' alert(route)', route)
                //         let iconName = focused
                //             ? icons['focused'][route.name]
                //             : icons['normal'][route.name];
                //
                //         // You can return any component that you like here!
                //         return <MaterialIcons name={iconName} size={size} color={color}/>;
                //     },
                // })}
                // tabBarOptions={{
                //     activeTintColor: 'green',
                //     inactiveTintColor: 'gray',
                // }}
            >
                <Tab.Screen name="Home" component={CategoryStackScreen}/>
                <Tab.Screen name="Cart" component={CartStackScreen}/>
                <Tab.Screen name="Orders" component={OrdersStackScreen}/>
                <Tab.Screen name="Setting" component={SettingStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
