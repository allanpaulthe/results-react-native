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
    title: 'Departments',
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
                fontSize:30,
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
            <View style={styles.row}>
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
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection:'column',
        paddingHorizontal: 30,
      },
      row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems:'center'
      },
      button: {
        backgroundColor: 'blue',
        padding:2,
        marginTop:25,
        width:270,
        height:80,
        borderRadius:20
      },
      buttonText:{
          color:'white',
          fontSize: 20,
          fontWeight:'bold',
          textAlign:'center',
          paddingVertical:20
      },
});

export default teacherHome;
