'use strict';

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import SecondScreen from './components/SecondScreen';


export const results = StackNavigator({
  Home: { screen: Home },
  SecondScreen: { screen: SecondScreen, title: "Second Screen" }
})

AppRegistry.registerComponent('results', () => results);