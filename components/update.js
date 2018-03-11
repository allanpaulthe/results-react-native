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
  Alert,Picker
} from 'react-native';
import { StackNavigator } from "react-navigation";


const { width, height } = Dimensions.get("window");
const mark = require("./images/login1_mark.png");
const lockIcon = require("./images/login1_lock.png");
const personIcon = require("./images/login1_person.png");
const email = require("./images/email.png");


export default class update extends Component {
    constructor(props) {
        super(props);
        this.state = {sem: '',roll: '',dep:'',grade:'',code:''};
      }
      static navigationOptions = {
        title: 'update',
        headerStyle: { backgroundColor: '#e74c3c',height:25 },
        headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
      };
      tryUpdate = (navigate,s,d,r,g,c) =>{
          url='http://127.0.0.1:8000/apii/updateMark/'+s+'/'+d+'/'+r+'/'+g+'/'+c+'/';
          fetch(url).then(res => {
            status=res.status;
            if(status=='200'){
              alert("success");
              navigate("collegehome");
            }
            if(status=='400' || status=='404'){
              alert("Some Error in the Data entered please verify ");
            }
          });
      }
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
            <Picker
              style={styles.input}
              selectedValue={this.state.sem}
              onValueChange={(itemValue, itemIndex) => {this.setState({sem: itemValue})}}>
              <Picker.Item value='' label='semester' />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
            </Picker>
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <Picker
              style={styles.input}
              selectedValue={this.state.batch}
              onValueChange={(itemValue, itemIndex) => {this.setState({dep: itemValue})}}>
              <Picker.Item value='' label='Department' />
              <Picker.Item label="Computer Science" value="CS" />
              <Picker.Item label="Information Technology" value="IT" />
            </Picker>
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
                placeholderTextColor="#FFF"
                placeholder="RollNo" 
                style={styles.input}  
                onChangeText={(roll) => this.setState({roll})}
              />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
                placeholderTextColor="#FFF"
                placeholder="Subject Code" 
                style={styles.input}  
                onChangeText={(code) => this.setState({code})}
              />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <Picker
              style={styles.input}
              selectedValue={this.state.batch}
              onValueChange={(itemValue, itemIndex) => {this.setState({grade: itemValue})}}>
              <Picker.Item value='' label='Grade' />
              <Picker.Item label="O GRADE" value="O" />
              <Picker.Item label="A+ GRADE" value="A+" />
              <Picker.Item label="A GRADE" value="A" />
              <Picker.Item label="B+ GRADE" value="B+" />
              <Picker.Item label="B GRADE" value="B" />
              <Picker.Item label="C GRADE" value="C" />
              <Picker.Item label="P GRADE" value="P" />
              <Picker.Item label="FAIL" value="F" />
            </Picker>
          </View>
          <TouchableOpacity activeOpacity={.5}
            onPress={()=> this.tryUpdate(navigate,this.state.sem,this.state.dep,this.state.roll,this.state.grade,this.state.code)}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>update</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.signupWrap}>
            <Text style={styles.accountText}>upload to EduHub</Text>
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
    paddingVertical: 80,
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
