import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import { StackNavigator } from "react-navigation";

const { width, height } = Dimensions.get("window");


export default class welcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {user: '',pass: '',users:[],};
      }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style = {styles.backgroundContainer}>
            
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
