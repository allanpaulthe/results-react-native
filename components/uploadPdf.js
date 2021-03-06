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
import { loginfunction } from '../networking/server';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

const { width, height } = Dimensions.get("window");
const mark = require("./images/login1_mark.png");
const lockIcon = require("./images/login1_lock.png");
const personIcon = require("./images/login1_person.png");
const email = require("./images/email.png");


export default class uploadPdf extends Component {
    constructor(props) {
        super(props);
        this.state = {sem: '',batch: '',result:[],type:''};
      }
      static navigationOptions = {
        title: 'upload',
        headerStyle: { backgroundColor: '#e74c3c',height:25 },
        headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
      };
      handlePress = () => {
        DocumentPicker.show({
              filetype: [DocumentPickerUtil.pdf()],
            },(error,res) => {
              this.setState({result:res});
              /*alert(
                 res.uri,
                 res.type, // mime type
                 res.fileName,
                 res.fileSize
              );*/
            });
      }
      tryUpload = (navigate,s,b,r) =>{
          url='http://127.0.0.1:8000/eee/'+s+'/'+b+'/';
          const data = new FormData();
          data.append('name', 'testName'); // you can append anyone.
          data.append('pdf', {
            uri: r.uri,
            type: r.type,
            name: r.fileName
          });
          fetch(url, {
            method: 'post',
            body: data
          }).then(res => {
            status=res.status;
            if(status=='200'){
              alert("success");
              navigate("collegehome");
            }
            if(status=='400'){
              alert("already exist data");
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
              onValueChange={(itemValue, itemIndex) => {this.setState({batch: itemValue})}}>
              <Picker.Item value='' label='Batch' />
              <Picker.Item label="16-20" value="16" />
              <Picker.Item label="17-21" value="17" />
              <Picker.Item label="15-19" value="15" />
            </Picker>
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <Picker
              style={styles.input}
              selectedValue={this.state.type}
              onValueChange={(itemValue, itemIndex) => {this.setState({type: itemValue})}}>
              <Picker.Item value='' label='Type of result' />
              <Picker.Item label="Normal" value="0" />
              <Picker.Item label="Revaluation" value="1" />
              <Picker.Item label="Supplimentary" value="2" />
            </Picker>
          </View>
          <TouchableOpacity activeOpacity={.5}
          onPress={this.handlePress}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>choose file</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}
            onPress={()=> this.tryUpload(navigate,this.state.sem,this.state.batch,this.state.result)}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>upload</Text>
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
