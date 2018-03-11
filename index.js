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
import Chart from './components/chart';
import stuSemList from './components/stuSemList';
import semCompare1 from './components/semComapare';
import semChart from './components/semChart';
import batchList from './components/batchList';
import excelPage from './components/excelpage';
import subjectAnalysis from './components/subAna';
import update from './components/update';


export const results = StackNavigator({
  Home: { screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  HomeScreen: { screen: Home},
  myhome: { screen: myhome, title: "Second Screen" },
  SecondScreen: { screen: SecondScreen, title: "Second Screen" },
  teachersignupScreen: { screen: teachersignupScreen},
  studentsignupScreen: { screen: studentsignupScreen},
  collegehome: { screen: collegeHome},
  collegesignupScreen: { screen: collegesignupScreen},
  signupList: { screen: signupList},
  uploadPdf: { screen: uploadPdf},
  teacherHome: { screen: teacherHome},
  semList: { screen: semList},
  selfA: { screen: selfA},
  totalA: { screen: totalA},
  chart: { screen: Chart},
  stuSemList:{screen:stuSemList},
  semCompare1:{screen:semCompare1},
  semChart:{screen:semChart},
  batchList:{screen:batchList},
  excelPage:{screen:excelPage},
  SubAnalysis:{screen:subjectAnalysis},
  update:{screen:update},

})

AppRegistry.registerComponent('results', () => results);