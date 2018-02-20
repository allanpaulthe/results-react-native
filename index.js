'use strict';

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import SecondScreen from './components/SecondScreen';
import LoginScreen from './components/login';
import myhome from './components/myhome';
import welcomeScreen from './components/welcome';
import teachersignupScreen from './components/teachersignup';
import studentsignupScreen from './components/studentsignup';
import collegesignupScreen from './components/collegesignup';
import signupList from './components/signuplist';
import collegeHome from './components/collegehome';
import uploadPdf from './components/uploadPdf';
import teacherHome from './components/teacherhome';
import semList from './components/semList';
import selfA from './components/selfanalysis';
import totalA from './components/totalAnalysis';

export const results = StackNavigator({
  Home: { screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  HomeScreen: { screen: Home, title: "Second Screen",
  navigationOptions: {
    header: null,
  },
 },
  myhome: { screen: myhome, title: "Second Screen" },
  SecondScreen: { screen: SecondScreen, title: "Second Screen" },
  teachersignupScreen: { screen: teachersignupScreen,navigationOptions: {
    header: null,
    },
  },
  studentsignupScreen: { screen: studentsignupScreen,navigationOptions: {
    header: null,
    },
  },
  collegehome: { screen: collegeHome,navigationOptions: {
    header: null,
    },
  },
  collegesignupScreen: { screen: collegesignupScreen,navigationOptions: {
    header: null,
    },
  },
  signupList: { screen: signupList,navigationOptions: {
    header: null,
    },
  },
  uploadPdf: { screen: uploadPdf,navigationOptions: {
    header: null,
    },
  },
  teacherHome: { screen: teacherHome,navigationOptions: {
    header: null,
    },
  },
  semList: { screen: semList,navigationOptions: {
    header: null,
    },
  },
  selfA: { screen: selfA,navigationOptions: {
    header: null,
    },
  },
  totalA: { screen: totalA,navigationOptions: {
    header: null,
    },
  }

})

AppRegistry.registerComponent('results', () => results);