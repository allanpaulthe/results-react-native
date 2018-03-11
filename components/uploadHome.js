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
const mark = require("./images/login1_mark.png");
const lockIcon = require("./images/login1_lock.png");
const personIcon = require("./images/login1_person.png");
const email = require("./images/email.png");


export default class uploadHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sem: '',
      batch: '',
    };
  }
    static navigationOptions = {
        title: 'upload',
        headerStyle: { backgroundColor: '#e74c3c',height:25 },
        headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
      };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style = {styles.backgroundContainer}>
            <Image source = {require('./images/fire.jpg')}  style = {styles.backdrop} />
        </View>
          <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="semester" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              onChangeText={(sem) => {this.setState({sem});}}
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="batch" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              onChangeText={(batch) => {this.setState({batch});}}
            />
          </View>
          <TouchableOpacity activeOpacity={.5}
          onPress={() => navigate("uploadPdf")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>select file</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}
          onPress={() => alert("upload")}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>upload</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.signupWrap}>
            <Text style={styles.accountText}>upload to the EduHub</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    paddingVertical: 50,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color:'#E4F1FE',
  },
  button: {
    backgroundColor: "#00bf8f",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    height:20,
    borderRadius:20
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});
