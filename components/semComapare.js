import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView,Dimensions,Alert,TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { calculateAll,getSub,semCompare } from '../networking/server';
const { width, height } = Dimensions.get("window");
import { Bar } from 'react-native-pathjs-charts';
class FlatListItem1 extends Component {
  render(){
    return(
      <View>
            <View style={{
              flex:1,
              backgroundColor:'#f39c12',
              marginTop:25,
              height:100,
            }}>
              <Text style={styles.welcome}>
                {this.props.item.name}
              </Text>
              <Text style={styles.data}>
                  pass percentage:  {this.props.item.v}
              </Text>
            </View>
          <View style={{
            height:3,
            backgroundColor:"black"
          }}>
          </View>
      </View>
    );
  }
}
class semCompare1 extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: [],
      subs:[],
      total:[],
      res:[]
    });
  }
  componentDidMount(){
    const { params } = this.props.navigation.state;
   // this.refreshDataFromServer();
    this.getResult();
  }
  getResult(){
    const { params } = this.props.navigation.state;
    semCompare(params.d).then((alan)=>{
      this.setState({subs:alan});
    }).catch((error)=>{
      this.setState({subs:[]});
    })
  } 
  tryNavigate(){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    semCompare(params.d).then((alan)=>{
      navigate("semChart",{d:alan});
    });
  }
  static navigationOptions = {
    title: 'Semester Comparison',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const { state } = this.props.navigation;
    return (
     <View style={styles.container}>
        <FlatList
          style={{
            flex:1,
            width:width,
          }}
          data={this.state.subs}
          renderItem={({item,index}) => {
              if(this.state.subs!=[]){
                    return(
                        <FlatListItem1 item={item} index={index}>
        
                        </FlatListItem1>
                    )
                }
                  
          }}
          keyExtractor={item => item.name}
        />  
        <TouchableOpacity
          //onPress={() => calculate('IT','2',this.props.item.rollno)}
          onPress={() => this.tryNavigate()}
        >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Graphical view</Text>
              </View>
        </TouchableOpacity>
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
    backgroundColor: "#eccc68"
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
    color:'#2c3e50',
    margin: 10
  },
  data:{
    fontSize:20,
    textAlign:'center',
    
  },
  instructions: {
    fontSize: 20,
    textAlign: "center",
    color: "#3a3d42",
    fontWeight: 'bold',
    marginBottom: 5,
    padding:5,
  },
  button: {
    backgroundColor: "#00bf8f",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    height:20,
    width:width,
    borderRadius:10
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default semCompare1;
