import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {EnglishStackScreen} from './navigators/EnglishNavigator';
import {CartStackScreen, OrdersStackScreen, SettingStackScreen, AoeRandomStackScreen} from './CartNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export const DrawerNav = () => {
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
        </NavigationContainer>
    );
};
