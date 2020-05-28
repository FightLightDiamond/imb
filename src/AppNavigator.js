import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CartScreen from './screens/CartScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryScreen from './screens/CategoryScreen';
import OrdersScreen from './screens/OrdersScreen';
import SettingScreen from './screens/SettingScreen';
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
                    component={CartScreen}
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
                component={CategoriesScreen}
                options={{title: 'Categories XS'}}
            />
            <CategoryStack.Screen
                name="Category"
                component={CategoryScreen}
            />
        </CategoryStack.Navigator>);
    };

    const OrderStack = createStackNavigator();

    const OrdersStackScreen = () => {
        return (
            <OrderStack.Navigator>
                <OrderStack.Screen
                    name="Orders"
                    component={OrdersScreen}
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
                    component={SettingScreen}
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
