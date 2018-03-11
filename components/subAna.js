import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView,Dimensions,Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs,SubAna } from '../networking/server';
const { width, height } = Dimensions.get("window");
class subjectAnalysis extends Component {
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
      SubAna(params.d,params.sem,params.b,params.sub).then((movies)=> {
        this.setState({ dataapi: movies });
      }).catch((error)=>{
        this.setState({ dataapi: [] });
      });
  }
  static navigationOptions = {
    title: 'Result',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const {state} = this.props.navigation;
    return (
     <View style={styles.container}>
        <Text style={styles.welcome}>{state.params.sub}</Text>  
        <Text style={styles.instructions}> O grades:{this.state.dataapi[0]}</Text> 
        <Text style={styles.instructions}> A+ grades:{this.state.dataapi[1]}</Text>
        <Text style={styles.instructions}> A grades:{this.state.dataapi[2]}</Text> 
        <Text style={styles.instructions}> B+ grades:{this.state.dataapi[3]}</Text>  
        <Text style={styles.instructions}> B grades:{this.state.dataapi[4]}</Text> 
        <Text style={styles.instructions}> C grades:{this.state.dataapi[5]}</Text> 
        <Text style={styles.instructions}> p grades:{this.state.dataapi[6]}</Text> 
        <Text style={styles.instructions}> passed:{this.state.dataapi[10]}</Text>  
        <Text style={styles.instructions}> failed:{this.state.dataapi[9]}</Text> 
        <Text style={styles.instructions}> percentage:{this.state.dataapi[7]}</Text>  
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

export default subjectAnalysis;
