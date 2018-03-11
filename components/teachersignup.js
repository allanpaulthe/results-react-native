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
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import { StackNavigator } from "react-navigation";

const { width, height } = Dimensions.get("window");
const mark = require("./images/login1_mark.png");
const lockIcon = require("./images/login1_lock.png");
const personIcon = require("./images/login1_person.png");
const email = require("./images/email.png");


export default class teachersignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      rollno:'',
      college:'',
      Department:'',
      email:'',
      name:'',
      validatedemail : false,
      validate:[],
    };
  }
  tchsignup=(navigate,state)=>{
    flag=0;
        for(i=0;i<5;i++){
          if(!state.validate[i]){
            flag=1;
          }
        }
      if(flag==0){
        if(this.state.validatedemail){
          fetch('http://127.0.0.1:8000/api/listuser/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: state.user,
              password: state.pass,
              email:state.email,
              category:"teacher",
              name:state.name,
              department:state.Department,
              rollno:state.rollno,
              college:state.college,
            }),
          });
        navigate("Home");
        }
        else{
          Alert.alert("incorrect email format")
        }
      }
      else{
        Alert.alert("all fields are requied")
      }
  }
  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(text) === false)
      {
      this.setState({ validatedemail : false });
      this.setState({email:text})
      return false;
      }
      else {
        this.setState({email:text})
        this.setState({ validatedemail : true });
      }
    }
    static navigationOptions = {
      title: 'Teacher Signup',
      headerStyle: { backgroundColor: '#e74c3c',height:25 },
      headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
    };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style = {styles.backgroundContainer}>
            <Image source = {require('./images/fire.jpg')}  style = {styles.backdrop} />
        </View>
          <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="Name" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              onChangeText={(name) => {this.setState({name});this.state.validate[0]=true}}
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="username" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              onChangeText={(user) => {this.setState({user});this.state.validate[1]=true}}
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={require('./images/institution.png')} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="college" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              onChangeText={(college) => {this.setState({college});this.state.validate[2]=true}}
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={require('./images/institution.png')} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="Department" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              onChangeText={(Department) => {this.setState({Department});this.state.validate[3]=true}}
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={email} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="email" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              onChangeText={(text) => this.validate(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholderTextColor="#FFF"
              placeholder="Password" 
              style={styles.input} 
              secureTextEntry 
              onChangeText={(pass) => {this.setState({pass});this.state.validate[4]=true}}
            />
          </View>
          <TouchableOpacity activeOpacity={.5}
          onPress={() => this.tchsignup(navigate,this.state)}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.signupWrap}>
            <Text style={styles.accountText}>signup to the EduHub</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    paddingVertical: 0,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 8,
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
