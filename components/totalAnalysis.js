import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView,Dimensions,Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import { calculateAll,getSub } from '../networking/server';
const { width, height } = Dimensions.get("window");
class totalA extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: [],
      subs:[]
    });
  }
  componentWillMount(){
    const { params } = this.props.navigation.state;
    this.refreshDataFromServer();
    this.getSubs();
  }
  refreshDataFromServer(){
    const { params } = this.props.navigation.state;
      calculateAll(params.data,params.d,params.sem).then((movies)=> {
        this.setState({ dataapi: movies });
      }).catch((error)=>{
        this.setState({ dataapi: [] });
      });
  }
  getSubs(){
    getSub('IT','2').then((alan)=>{
      this.setState({subs:alan});
    }).catch((error)=>{
      this.setState({subs:[]});
    })
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
        <Text style={styles.welcome}>Total:{this.state.dataapi[0]}</Text> 
        <Text style={styles.instructions}>{this.state.subs[1]}:{this.state.dataapi[1]}</Text> 
        <Text style={styles.instructions}>{this.state.subs[2]}:{this.state.dataapi[2]}</Text>
        <Text style={styles.instructions}>{this.state.subs[3]}:{this.state.dataapi[3]}</Text>
        <Text style={styles.instructions}>{this.state.subs[4]}:{this.state.dataapi[4]}</Text>   
        <Text style={styles.instructions}>{this.state.subs[5]}:{this.state.dataapi[5]}</Text>
        <Text style={styles.instructions}>{this.state.subs[6]}:{this.state.dataapi[6]}</Text>
        <Text style={styles.instructions}>{this.state.subs[7]}:{this.state.dataapi[7]}</Text>
        <Text style={styles.instructions}>{this.state.subs[8]}:{this.state.dataapi[8]}</Text>
        <Text style={styles.instructions}>{this.state.subs[9]}:{this.state.dataapi[9]}</Text>
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

export default totalA;
