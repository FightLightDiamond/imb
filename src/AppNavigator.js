import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {EnglishStackScreen} from './navigators/EnglishNavigator';
import {CartStackScreen, OrdersStackScreen, SettingStackScreen, AoeRandomStackScreen} from './navigators/CartNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export const AppNavigator = () => {
    const Tab = createBottomTabNavigator();

    const icons = {
        focused: {
            // Home: 'home',
            AoeRandom: 'book',
            Cart: 'shopping-cart',
            Orders: 'book',
            Setting: 'settings',
            English: 'settings',
        },
        normal: {
            AoeRandom: 'book',
            // Home: 'home',
            Cart: 'shopping-cart',
            Orders: 'book',
            Setting: 'settings',
            English: 'settings',
        },
    };

    const Drawer = createDrawerNavigator();

    function MyDrawer() {
        return (
            <Drawer.Navigator
                openByDefault
                overlayColor="transparent"
            >
                <Drawer.Screen name="AoeRandom"
                               options={{
                                   drawerIcon: config => <Icon
                                       size={23}
                                       name={'ios-list'}></Icon>
                               }}
                               onPress={() => this.props.navigation.closeDrawer()}
                               component={AoeRandomStackScreen}/>
                {/*<Drawer.Screen name="English" component={EnglishStackScreen} />*/}
                <Drawer.Screen name="Cart"
                               onPress={() => this.props.navigation.closeDrawer()}
                               component={CartStackScreen}
                />
            </Drawer.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <MyDrawer/>

            {/*<Tab.Navigator*/}
            {/*    screenOptions={({route}) => ({*/}
            {/*        tabBarIcon: ({focused, color, size}) => {*/}
            {/*            let iconName = focused*/}
            {/*                ? icons['focused'][route.name]*/}
            {/*                : icons['normal'][route.name];*/}
            {/*            // You can return any component that you like here!*/}
            {/*            return <MaterialIcons name={iconName} size={size} color={color}/>;*/}
            {/*        },*/}
            {/*    })}*/}
            {/*    tabBarOptions={{*/}
            {/*        activeTintColor: 'green',*/}
            {/*        inactiveTintColor: 'gray',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Tab.Screen name="AoeRandom" component={AoeRandomStackScreen}/>*/}
            {/*    <Tab.Screen name="English" component={EnglishStackScreen}/>*/}
            {/*    /!*<Tab.Screen name="Home" component={CategoryStackScreen}/>*!/*/}
            {/*    <Tab.Screen name="Cart" component={CartStackScreen}/>*/}
            {/*    <Tab.Screen name="Orders" component={OrdersStackScreen}/>*/}
            {/*    <Tab.Screen name="Setting" component={SettingStackScreen}/>*/}

            {/*</Tab.Navigator>*/}
        </NavigationContainer>
    );
};
