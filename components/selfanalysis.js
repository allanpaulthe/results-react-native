import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView,Dimensions,Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs,calculate } from '../networking/server';
const { width, height } = Dimensions.get("window");
class selfA extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: []
    });
  }
  componentWillMount(){
    const { params } = this.props.navigation.state;
    this.refreshDataFromServer();
  }
  refreshDataFromServer(){
    const { params } = this.props.navigation.state;
      calculate(params.d,params.sem,params.roll).then((movies)=> {
        this.setState({ dataapi: movies });
      }).catch((error)=>{
        this.setState({ dataapi: [] });
      });
  }
  static navigationOptions = {
    title: 'Mark list',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const {state} = this.props.navigation;
    return (
     <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.dataapi[1]}</Text>  
        <Text style={styles.instructions}>gpa:{this.state.dataapi[0]}</Text> 
        <Text style={styles.instructions}>percentage:{this.state.dataapi[2]}</Text>     
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19B5FE"
  },
  data:{
    paddingTop:40,
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
    color:'#2c3e50',
    margin: 10
  },
  instructions: {
    fontSize: 20,
    textAlign: "center",
    color: "#3a3d42",
    fontWeight: 'bold',
    marginBottom: 5,
    padding:5,
  },
});

export default selfA;
