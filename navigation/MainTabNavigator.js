import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'الرئيسية',
    tabBarIcon: ({ focused }) => (
        <Icon name="md-home" size={30} style={{marginTop:6}} size={30} color={focused ? '#22a6b3' : '#130f40'} />
    ),
};

const LinksStack = createStackNavigator({
    Links: LinksScreen,
});

LinksStack.navigationOptions = {
    tabBarLabel: 'احدث المنتجات',
    tabBarIcon: ({ focused }) => (
        <Icon name="md-cart" size={30} style={{marginTop:6}} color={focused ?  '#22a6b3' : '#130f40'} />
    ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'صمم بنفسك',
    tabBarIcon: ({ focused }) => (
        <Icon name="md-color-palette" size={30} style={{marginTop:6}} size={30} color={focused ?  '#22a6b3' : '#130f40'} />
    ),
};

export default createBottomTabNavigator({
    SettingsStack,
    LinksStack,
    HomeStack,

},{
    initialRouteName: 'HomeStack',
    tabBarOptions:{
        inactiveBackgroundColor: '#22a6b3',
        inactiveTintColor:'#130f40',
        activeTintColor: '#22a6b3',
        activeBackgroundColor:'#130f40',

        style: {
            activeTintColor: 'red',

        },
        labelStyle:{
            fontSize:14,
            fontFamily:'cairo'
        }
    }
});
