import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView, TouchableHighlight,
  TouchableOpacity,Dimensions } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs,getmark } from '../networking/server';
const { width, height } = Dimensions.get("window");
class FlatListItem extends Component {
  render(){
    return(
      <View>
        <TouchableOpacity activeOpacity={.5}
        onPress={() =>this.props.navigate("myhome",{rollno: this.props.item.rollno,department:this.props.department,sem:this.props.sem})}
        title="Home"
        >
          <View style={{
            flex:1,
            backgroundColor:this.props.index%2==0 ? '#f1c40f':'#f39c12'
          }}>
            <Text style={styles.welcome}>
              {this.props.item.rollno}
            </Text>
          </View>

          <View style={{
            height:1,
            backgroundColor:"black"
          }}>

          </View>
      </TouchableOpacity>
      </View>
    );
  }
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: [],
      data1:[],
    });
  }
componentDidMount(){
    this.refreshDataFromServer();
}
refreshDataFromServer(){
  const { params } = this.props.navigation.state;
    getmark(params.d,params.sem,params.b).then((movies)=> {
      this.setState({ dataapi: movies });
    }).catch((error)=>{  
      this.setState({ dataapi: []});
    });
}
  static navigationOptions = {
    title: 'Student List',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const { state } = this.props.navigation;
    return (
     <View style={styles.container}>
        <FlatList
          style={styles.flat}
          data={this.state.dataapi}
          renderItem={({item,index}) => {
            return(
              <FlatListItem item={item} index={index} navigate={navigate} department={state.params.d} sem={state.params.sem} >

              </FlatListItem>
            )
          }}
          keyExtractor={item => item.rollno}
        />
         <View>
          <TouchableOpacity
           onPress={() => navigate("totalA",{data:this.state.dataapi,d:state.params.d,sem:state.params.sem,b:state.params.b})}
          >
            <View style={styles.button}>
                <Text style={styles.buttonText}>Total Analysis</Text>
            </View>
          </TouchableOpacity>
        </View>         
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flat:{
    flex:1,
    width:width
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color:'#2c3e50',
    margin: 10
  },
  instructions: {
    fontSize: 13,
    textAlign: "center",
    color: "#3a3d42",
    marginBottom: 5,
    padding:5,
  },
  button: {
    backgroundColor: "#00af8f",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    height:20,
    width:width,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default Home;
