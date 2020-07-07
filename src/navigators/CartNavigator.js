import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AoeRandomScreen from '../screens/AoeRandomScreen';
import CartScreen from '../screens/CartScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryScreen from '../screens/CategoryScreen';
import LoginScreen from '../screens/LoginScreen';
import TodoScreen from '../screens/TodoScreen';
import OrdersScreen from '../screens/OrdersScreen';
import SettingScreen from '../screens/SettingScreen';

const CartStack = new createStackNavigator();
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

// register stack Navigator
const CategoryStack = new createStackNavigator();
// format is component
const CategoryStackScreen = () => {
    const navigator = <CategoryStack.Navigator>
        <CategoryStack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{title: 'Categories XS'}}
        />
        <CategoryStack.Screen
            name="Category"
            component={CategoryScreen}
        />
        <CategoryStack.Screen
            name="Login"
            component={LoginScreen}
        />
        <CategoryStack.Screen
            name="Todo"
            component={TodoScreen}
        />
    </CategoryStack.Navigator>

    return (navigator);
};

const OrderStack = new createStackNavigator();

const OrdersStackScreen = () => {
    const navigator =  <OrderStack.Navigator>
        <OrderStack.Screen
            name="Orders"
            component={OrdersScreen}
            options={{title: 'Orders'}}
        />
    </OrderStack.Navigator>
    return (navigator);
};

const SettingStack = new createStackNavigator();

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


const AoeRandomStack= new createStackNavigator();

const AoeRandomStackScreen = () => {
    return (
        <AoeRandomStack.Navigator>
            <AoeRandomStack.Screen
                name="AoeRandom"
                component={AoeRandomScreen}
                options={{title: 'Aoe Random'}}
            />
        </AoeRandomStack.Navigator>
    );
};

export {CartStackScreen, OrdersStackScreen, SettingStackScreen, CategoryStackScreen, AoeRandomStackScreen}
