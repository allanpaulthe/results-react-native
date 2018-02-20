import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView, TouchableHighlight,
  TouchableOpacity,Dimensions } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs } from '../networking/server';
const { width, height } = Dimensions.get("window");

class semList extends Component {
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
    const { state } = this.props.navigation;
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
                Semesters
            </Text>
        </View>
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate("HomeScreen",{d:state.params.d,sem:'1'})}
                >
                    <Text
                        style={styles.buttonText}
                    >1</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate("HomeScreen",{d:state.params.d,sem:'2'})}
                >
                    <Text
                        style={styles.buttonText}
                    >2</Text>
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
        justifyContent: 'space-between',
        flexDirection:'row',
        paddingHorizontal: 25,
        alignItems:'flex-start'
      },
      row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
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
          fontSize: 50,
          fontWeight:'bold',
          textAlign:'center',
          paddingVertical:40
      }
});

export default semList;
