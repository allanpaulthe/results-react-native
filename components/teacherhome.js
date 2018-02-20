import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView, TouchableHighlight,
  TouchableOpacity,Dimensions } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs } from '../networking/server';
const { width, height } = Dimensions.get("window");

class teacherHome extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View>
        <View>
            <Text style={{
                color:'black',
                fontSize:20,
                fontStyle:'italic',
                fontWeight:'bold',
                fontFamily:'monospace',
                textAlign:'center',
                paddingTop:10
            }}>
                Departments
            </Text>
        </View>
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate("semList",{d:'IT'})}
            >
            <Text
                style={styles.buttonText}
            >Information Technology</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate("semList",{d:'CS'})}
            >
            <Text
                style={styles.buttonText}
            >Computer Science</Text>
            </TouchableOpacity>     
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection:'row',
        paddingHorizontal: 25,
        alignItems:'flex-start'
      },
      button: {
        backgroundColor: 'blue',
        padding:2,
        marginTop:25,
        width:160,
        height:160,
      },
      buttonText:{
          color:'white',
          fontSize: 20,
          textAlign:'center',
          paddingVertical:40
      }
});

export default teacherHome;
