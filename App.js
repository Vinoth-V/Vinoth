/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    AsyncStorage,

} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import BotList from './BotList.js';
import Login from './Login';
import Intro from './Intro.js';
import Register from './Register';
import Profile from './Profile'; 
import ChangePassword from './ChangePassword'; 
import Logout from './Logout'; 
import SFChat from './SFChat';
import DynamicsChat from './DynamicsChat';
import SFUpdateForm from './SFUpdateForm';
import SFLogin from './SFLogin';
import DynamicsLogin from './DynamicsLogin';

const styles = StyleSheet.create({
  tab: {
    padding: 5
  },
  indicator: {
    width: 0,
    height: 0
  },
  label: {
    fontSize: 10
  },
  icon: {
  },
  tabBar: {
    backgroundColor: '#186A3B',
  }
});


const TabNavigation = TabNavigator({
  BotList: {
        path: "./",
    screen: BotList,
      navigationOptions: ({ navigation }) => ({
        title: "Chat",
            header: null,
            tabBarIcon: ({ tintColor }) => {
      return <Icon name="commenting-o" size={25} color={tintColor} />;
    }


      })
  },
  Profile: {
        path: "./Profile",

    screen: Profile,
    navigationOptions: ({ navigation }) => ({
        title: "Profile",
            tabBarIcon: ({ tintColor }) => {
      return <Icon name="user" size={25} color={tintColor} />;
    }


      })  
  },
  ChangePassword: {
        path: "./ChangePassword",

    screen: ChangePassword,
    navigationOptions: ({ navigation }) => ({
        title: "Password",
            tabBarIcon: ({ tintColor }) => {
      return <Icon name="lock" size={25} color={tintColor} />;
    }

      })  
  },


  Logout: {
        path: "./Logout",
        screen: Logout,
    navigationOptions: ({ navigation }) => ({
        title: "Logout",
            tabBarIcon: ({ tintColor }) => {
      return <Icon name="sign-out" size={25} color={tintColor} />;
    }


      })  
  },

  
}, {initialRouteName: "BotList",
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    order: ["BotList", "Profile","ChangePassword","Logout"],
    backBehavior: "initialRoute",
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F0F0F0',
      showLabel: true,
      showIcon: true,
      upperCaseLabel: false,
      pressColor: '#F0F0F0',
      scrollEnabled: false,
      tabStyle: styles.tab,
      indicatorStyle: styles.indicator,
      labelStyle: styles.label,
      iconStyle: styles.icon,
      style: styles.tabBar
    }
  });

const StackNavigation = StackNavigator({
  Intro: {
    path: './',
    screen: Intro,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    path: './',
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },

  DynamicsChat: {
    path: './DynamicsChat',
    screen: DynamicsChat,

  },

  SFChat: {
    path: './SFChat',
    screen: SFChat,
    navigationOptions: {
      title: 'Salesforce'
    }
  },
  Register: {
    path: './',
    screen: Register,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
  Main: {
    path: './TabNavigation',
    screen: TabNavigation,
  },
  SFUpdateForm:{
    path: './',
    screen: SFUpdateForm,
    navigationOptions: {
      title: 'Salesforce Update'
    }
  },
  SFLogin: {
    path: './SFLogin',
    screen: SFLogin,
    navigationOptions: {
      title: 'Salesforce Login'
    }
  },
   DynamicsLogin: {
    path: './DynamicsLogin',
    screen: DynamicsLogin,
    navigationOptions: {
      title: 'Dynamics Login'
    }
  },
  
});

export default StackNavigation;
